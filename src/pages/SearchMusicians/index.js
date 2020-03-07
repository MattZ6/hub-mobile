import React from 'react';
import { useSelector } from 'react-redux';
// import { Keyboard, View, Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

// import Header from '~/components/Header';
// import Shimmer from '~/components/Shimmer';
import ErrorContainer from '~/components/ErrorContainer';
import Musician from '~/components/Musician';
import Loading from '~/components/Loading';
// import OutlineButton from '~/components/OutlineButton';
import InformationContainer from '~/components/InformationContainer';

import FilterList from './components/FilterList';

import {
  Header,
  HeaderButton,
  HeaderIcon,
  Search,
  List,
  // Title,
} from './styles';

export default function SearchMusicians({ navigation }) {
  const filters = useSelector(state => state.filters);

  const [search, setSearch] = React.useState('');
  // const [lastSearch, setLastSearch] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [focus, setFocus] = React.useState(false);

  const [musicians, setMusicians] = React.useState([]);
  const [loadedAll, setLoadedAll] = React.useState(false);

  const SEARCH_LIMIT = 10;

  function mountParams(loadMoreMusicians = false) {
    let params = `limit=${SEARCH_LIMIT}`;

    if (loadMoreMusicians) {
      params += `&offset=${musicians.length}`;
    }

    if (search.trim().length > 0) {
      params += `&search=${search}`;
    }

    filters.skillLevels.forEach(x => {
      if (x.selected) {
        params += `&levels=${x.value}`;
      }
    });

    filters.skills.forEach(x => {
      if (x.selected) {
        params += `&skills=${x.id}`;
      }
    });

    filters.regions.forEach(x => {
      if (x.selected) {
        params += `&regions=${x.id}`;
      }
    });

    filters.styles.forEach(x => {
      if (x.selected) {
        params += `&styles=${x.id}`;
      }
    });

    return params;
  }

  function updateMusiciansList(data, more) {
    if (more) {
      const newData = data.map(item => {
        const shouldReturn = !musicians.some(x => x.id === item.id);

        // const musician = musicians.find(x => x.id === item.id);

        // if (musician) {
        //   return musician;
        // }

        if (shouldReturn) {
          return item;
        }
      });

      setMusicians([...musicians, ...newData]);
    } else {
      setMusicians(data);
    }
  }

  async function searchMusicians(more = false) {
    if (loading || refreshing) {
      return;
    }

    const params = mountParams(more);

    if (!params && search.trim().length === 0) {
      return;
    }

    // if (!more && params === lastSearch) {
    //   return;
    // }

    setRefreshing(more);
    setLoading(!more);

    setError(false);

    if (!more) {
      setMusicians([]);
    }

    try {
      const { data } = await api.get(`/v1/musicians?${params}`);

      updateMusiciansList(data, more);

      const hasLoadedAll = more && data.length < SEARCH_LIMIT;
      setLoadedAll(hasLoadedAll);

      // if (!more) {
      //   setLastSearch(params);
      // }
    } catch {
      setError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setRefreshing(false);
      }, 500);
    }
  }

  function loadMore() {
    if (loadedAll || loading || musicians.length < 10) return;

    searchMusicians(true);
  }

  function handleBack() {
    navigation.pop();
  }

  function clearList() {
    setMusicians([]);
  }

  function clearSearch() {
    setSearch('');
    clearList();
  }

  function changeSearch(text) {
    setSearch(text);
    clearList();
  }

  React.useEffect(() => {
    clearList();
  }, [filters]);

  return (
    <>
      <Header>
        {search.length > 0 ? (
          <HeaderButton onPress={clearSearch}>
            <HeaderIcon name="clear" />
          </HeaderButton>
        ) : (
          <HeaderButton onPress={handleBack}>
            <HeaderIcon name="arrow-back" />
          </HeaderButton>
        )}

        <Search
          placeholder="Buscar músicos"
          onChangeText={changeSearch}
          value={search}
          onSubmitEditing={() => searchMusicians()}
          editable={!loading}
          // onFocus={() => setFocus(true)}
          // onBlur={() => setFocus(false)}
        />

        <HeaderButton onPress={() => searchMusicians()}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>

      {/* {focus && (
        <InformationContainer
          title="Buscar músicos"
          description="Você pode buscar por nome ou apelido"
          icon="search"
        />
      )} */}

      {/* {!focus && musicians.length === 0 && (
        <InformationContainer
          title="Nenhum resultado encontrado"
          description="Você pode buscar por nome ou apelido"
          icon="search"
        />
      )} */}

      {/* {!focus && error && <ErrorContainer onPress={() => searchMusicians()} />} */}

      {/* {loading && <Loading style={{ flex: 1 }} />} */}

      {/* <InformationContainer
        title="Buscar músicos"
        description="Você pode buscar por nome ou apelido"
        icon="search"
      /> */}

      <List
        showsVerticalScrollIndicator={false}
        data={musicians}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => !loading && <Musician musician={item} />}
        ListHeaderComponent={<FilterList />}
        ListFooterComponent={
          <>
            {(loading || refreshing) && <Loading />}

            {!loading && !refreshing && musicians.length === 0 && (
              <InformationContainer
                title="Buscar músicos"
                description="Você pode buscar por nome, apelido ou usar os filtros"
                icon="search"
              />
            )}
          </>
        }
        ListFooterComponentStyle={{ padding: 16 }}
        onEndReachedThreshold={0.1}
        onEndReached={loadMore}
        contentContainerStyle={{ paddingBottom: 64 }}
      />
    </>
  );
}

SearchMusicians.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};
