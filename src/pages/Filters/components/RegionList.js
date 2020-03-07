import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRegions, selectRegion } from '~/store/modules/filters/actions';

import api from '~/services/api';

import { throwRequestErrorMessage } from '~/utils/error';

import Loading from '~/components/Loading';
import Refresher from '~/components/Refresher';
import ErrorContainer from '~/components/ErrorContainer';

import Region from './Region';

import { ContentContainer, Title } from '../styles';

export default function RegionList() {
  const dispatch = useDispatch();
  const regions = useSelector(state => state.filters.regions);

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState(true);

  function handleSelect(id) {
    dispatch(selectRegion(id));
  }

  async function getRegions(refresh = false) {
    setError(false);

    if (regions.length > 0 && !refresh) {
      return;
    }

    setLoading(!refresh);
    setRefreshing(refresh);

    try {
      const { data } = await api.get('/v1/regions');

      dispatch(setRegions(data));
    } catch (err) {
      if (regions.length > 0) {
        throwRequestErrorMessage(err);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  React.useEffect(() => {
    getRegions();
  }, []);

  return (
    <ContentContainer
      refreshControl={
        <Refresher
          onRefresh={() => getRegions(true)}
          refreshing={refreshing}
          enabled={!loading && !refreshing && !error}
        />
      }>
      {!error && loading && <Loading style={{ margin: 16 }} />}

      {!error && !loading && (
        <>
          <Title>Toque para selecionar uma cidade</Title>

          {regions.map(region => (
            <Region
              key={String(region.id)}
              region={region}
              onPress={() => handleSelect(region.id)}
            />
          ))}
        </>
      )}

      {error && !loading && <ErrorContainer onPress={() => getRegions()} />}
    </ContentContainer>
  );
}
