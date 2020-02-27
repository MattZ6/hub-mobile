import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRegions, selectRegion } from '~/store/modules/filters/actions';

import api from '~/services/api';

import Loading from '~/components/Loading';
import Region from './Region';

import { ContentContainer, Title } from '../styles';

export default function RegionList() {
  const dispatch = useDispatch();
  const regions = useSelector(state => state.filters.regions);

  const [loading, setLoading] = React.useState(false);

  function handleSelect(id) {
    dispatch(selectRegion(id));
  }

  React.useEffect(() => {
    async function getRegions() {
      if (regions.length === 0) {
        setLoading(true);

        try {
          const { data } = await api.get('/v1/regions');

          dispatch(setRegions(data));
        } catch (err) {
          console.tron.error(err);
        } finally {
          setLoading(false);
        }
      }
    }

    getRegions();
  }, []);

  return (
    <ContentContainer>
      <Title>Cidades</Title>

      <>
        {loading ? (
          <Loading style={{ margin: 16 }} />
        ) : (
          regions.map(region => (
            <Region
              key={String(region.id)}
              region={region}
              onPress={() => handleSelect(region.id)}
            />
          ))
        )}
      </>
    </ContentContainer>
  );
}
