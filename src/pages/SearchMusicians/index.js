import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Keyboard, View, Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { showToast } from '~/services/toast';

import Shimmer from '~/components/Shimmer';
import ErrorContainer from '~/components/ErrorContainer';
import Musician from '~/components/Musician';
import Loader from '~/components/Loader';

import {
  Container,
  Header,
  HeaderButton,
  HeaderIcon,
  ClearIcon,
  Search,
  List,
  ListHeader,
  Loading,
  ShimmerContainer,
  ShimmerContainerContent,
} from '~/pages/SearchMusicians/styles';
import OutlineButton from '~/components/OutlineButton';

export default function SearchMusicians({ navigation }) {
  const [search, setSearch] = useState('');
  const [searchCopy, setSearchCopy] = useState('');

  const [loadAll, setLoadAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [musicians, setMusicians] = useState([]);
  const [viewable, setViewable] = useState([]);

  const ref = useRef();

  function handleBack() {
    navigation.pop();
  }

  function handleSetSearchText(text) {
    setSearch(text);

    if (musicians.length > 0) {
      setMusicians([]);
    }
  }

  function handleClearSearch() {
    handleSetSearchText('');
    Keyboard.dismiss();
  }

  async function loadMusicians(loadMore = false) {
    if (loading || (loadMore && loadAll)) return;

    if (!loadMore) {
      setMusicians([]);
    }

    setLoading(true);
    setError(false);

    const params = {
      limit: 10,
      offset: loadMore ? musicians.length : 0,
    };

    if (search.trim().length > 0) {
      params.search = search.trim();
    }

    try {
      const { data } = await api.get('/v1/musicians', { params });

      if (data.length === 0) {
        setLoadAll(true);
        return;
      }

      const loadedMusicians = data.map(x => {
        if (!musicians.some(musician => musician.id === x.id)) {
          return { ...x };
        }
        // const exists =;

        // if (exists) {
        //   return null;
        // }

        // return { ...x };

        // let skillDescription = null;

        // if (x.skills.length > 0) {
        //   x.skills.forEach((skill, i) => {
        //     if (!skillDescription) {
        //       skillDescription = skill;
        //       return;
        //     }

        //     if (i < x.skills.length - 1) {
        //       skillDescription += `, ${skill}`;
        //     } else {
        //       skillDescription += ` e ${skill}`;
        //     }
        //   });
        // }

        // return { ...x, skillDescription };
      });

      setMusicians(
        !loadMore ? loadedMusicians : [...musicians, ...loadedMusicians]
      );
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    if (search.trim().length === 0) {
      return;
    }

    // setSearchCopy(search.trim());

    loadMusicians();
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  // if (musicians.length === 0 && loading) {
  //   return (
  //     <>
  //       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => (
  //         <ShimmerContainer key={String(key)}>
  //           <Shimmer width={56} height={56} style={{ borderRadius: 28 }} />
  //           <ShimmerContainerContent>
  //             <Shimmer width={100} height={16} />
  //             <Shimmer width={140} height={14} style={{ marginTop: 4 }} />
  //           </ShimmerContainerContent>
  //         </ShimmerContainer>
  //       ))}
  //     </>
  //   );
  // }

  return (
    <Container>
      <Header>
        <HeaderButton onPress={handleBack}>
          <HeaderIcon name="arrow-back" />
        </HeaderButton>

        <Search
          placeholder="Buscar músicos"
          onChangeText={handleSetSearchText}
          value={search}
          ref={ref}
          onSubmitEditing={handleSearch}
        />

        {search.length > 0 ? (
          <HeaderButton onPress={handleClearSearch}>
            <HeaderIcon name="clear" />
          </HeaderButton>
        ) : (
          <HeaderButton onPress={() => {}}>
            <HeaderIcon name="tune" />
          </HeaderButton>
        )}
      </Header>

      <List
        ListHeaderComponent={() => (
          <>
            <ListHeader>Buscar</ListHeader>
            <Text style={{ fontSize: 16, color: 'rgba(255,255,255,.3)' }}>
              Guitarristas da região
            </Text>
          </>
        )}
        data={musicians}
        keyExtractor={x => String(x.id)}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMusicians(true)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View
            style={{
              height: 56,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {error && !loading && (
              <Animated.View>
                <OutlineButton onPress={loadMusicians} />
              </Animated.View>
            )}
            {!error && loading && <Loader />}
          </View>
        )}
        renderItem={({ item }) => <Musician musician={item} />}
      />
    </Container>
  );
}
// <View style={{ backgroundColor: '#fff' }}>
//   <Loading renderToHardwareTextureAndroid  style={{ elevation: 10 }} />
// </View>

// {/* <TouchableOpacity onPress={() => {}}>
//   <Text style={{ padding: 20, color: '#fff', fontSize: 40 }}>Perfil</Text>
// </TouchableOpacity> */}
// {error ? (
//   <View
//     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text style={{ fontSize: 30, color: '#fff' }}>Deu ruim</Text>
//   </View>
// ) : (
//   <List
//     ListHeaderComponent={<ListHeader>Buscar</ListHeader>}
//     data={musicians}
//     keyExtractor={x => String(x.id)}
//     renderItem={({ item }) => <Musician musician={item} />}
//     showsVerticalScrollIndicator={false}
//   />
// )}

// {/* <Error title="Não foi possível carregar os músicos" style={{ flex: 1 }} /> */}

SearchMusicians.navigationOptions = {
  headerShown: false,
  //   headerStyle: {
  //     backgroundColor: 'rgba(255,255,255,.1)',
  //   },
};

SearchMusicians.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
