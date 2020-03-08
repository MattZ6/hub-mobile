import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { useBackButton } from '~/hooks/useBackButton';

import ErrorContainer from '~/components/ErrorContainer';
import Musician from '~/components/Musician';
import Loading from '~/components/Loading';
import InformationContainer from '~/components/InformationContainer';

import FilterList from './components/FilterList';
import BottomButton from './components/Button';

import { Header, HeaderButton, HeaderIcon, Search, List } from './styles';

function handleBackButton(handle) {
  return handle;
}

export default function SearchMusicians({ navigation }) {
  const filters = useSelector(state => state.filters);

  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const [loadError, setLoadError] = React.useState(false);
  const [refreshError, setRefreshError] = React.useState(false);

  const [musicians, setMusicians] = React.useState(null);
  const [loadedAll, setLoadedAll] = React.useState(false);

  const SEARCH_LIMIT = 10;

  useBackButton(() => handleBackButton(loading || refreshing));

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
      const newData = data.filter(
        item => !musicians.some(x => x.id === item.id)
      );

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

    setRefreshing(more);
    setLoading(!more);

    setLoadError(false);
    setRefreshError(false);

    if (!more) {
      setMusicians([]);
    }

    try {
      const { data } = await api.get(`/v1/musicians?${params}`);

      updateMusiciansList(data, more);

      const hasLoadedAll = more && data.length < SEARCH_LIMIT;
      setLoadedAll(hasLoadedAll);
    } catch {
      setRefreshError(more);
      setLoadError(!more);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setRefreshing(false);
      }, 500);
    }
  }

  function handleLoadMore() {
    if (loadedAll || loading || musicians.length < 10) return;

    searchMusicians(true);
  }

  function handleLoad() {
    searchMusicians();
  }

  function handleNavigateBack() {
    navigation.pop();
  }

  function clearList() {
    setMusicians([]);
    setMusicians(null);
  }

  function changeSearch(text) {
    setSearch(text);
    setRefreshError(false);
    setLoadError(false);
    clearList();
  }

  function handleClearAll() {
    changeSearch('');
  }

  React.useEffect(() => {
    setRefreshError(false);
    setLoadError(false);
    clearList();
  }, [filters]);

  return (
    <>
      <Header>
        {search.length > 0 ? (
          <HeaderButton
            onPress={handleClearAll}
            disabled={loading || refreshing}>
            <HeaderIcon name="clear" />
          </HeaderButton>
        ) : (
          <HeaderButton
            onPress={handleNavigateBack}
            disabled={loading || refreshing}>
            <HeaderIcon name="arrow-back" />
          </HeaderButton>
        )}

        <Search
          placeholder="Buscar músicos"
          onChangeText={changeSearch}
          value={search}
          onSubmitEditing={handleLoad}
          editable={!loading}
        />

        <HeaderButton onPress={handleLoad} disabled={loading || refreshing}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>

      <List
        showsVerticalScrollIndicator={false}
        data={musicians}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => !loading && <Musician musician={item} />}
        ListHeaderComponent={<FilterList />}
        ListFooterComponent={
          <>
            {loadError && (
              <ErrorContainer
                title="Não foi possível buscar os músicos"
                onPress={handleLoad}
              />
            )}

            {refreshError && (
              <BottomButton title="Tentar novamente" onPress={handleLoadMore} />
            )}

            {!refreshError && !loadError && (loading || refreshing) && (
              <Loading />
            )}

            {!refreshError &&
              !loadError &&
              !loading &&
              !refreshing &&
              !musicians && (
                <InformationContainer
                  title="Buscar músicos"
                  description="Você pode buscar por nome, apelido ou usar os filtros"
                  icon="search"
                />
              )}

            {!refreshError &&
              !loadError &&
              !loading &&
              !refreshing &&
              musicians &&
              musicians.length === 0 && (
                <InformationContainer
                  title="Nenhum resultado encontrado"
                  description="Tente alterar os filtros ou pesquise por outra palavra chave"
                  icon="youtube-searched-for"
                />
              )}
          </>
        }
        ListFooterComponentStyle={{
          paddingVertical: 16,
          paddingHorizontal: loadError ? 0 : 16,
        }}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
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
