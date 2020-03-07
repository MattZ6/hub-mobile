import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMusicStyles,
  selectMusicStyle,
} from '~/store/modules/filters/actions';

import api from '~/services/api';

import { throwRequestErrorMessage } from '~/utils/error';

import Loading from '~/components/Loading';
import Refresher from '~/components/Refresher';
import ErrorContainer from '~/components/ErrorContainer';

import Style from './Style';

import { ContentContainer, RoundButtonContainer, Title } from '../styles';

export default function StyleList() {
  const dispatch = useDispatch();
  const styles = useSelector(state => state.filters.styles);

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleSelect(id) {
    dispatch(selectMusicStyle(id));
  }

  async function getSkills(refresh = false) {
    setError(false);

    if (styles.length > 0 && !refresh) {
      return;
    }

    setLoading(!refresh);
    setRefreshing(refresh);

    try {
      const { data } = await api.get('/v1/styles');
      dispatch(setMusicStyles(data));
    } catch (err) {
      if (styles.length > 0) {
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
    getSkills();
  }, []);

  return (
    <ContentContainer
      refreshControl={
        <Refresher onRefresh={() => getSkills(true)} refreshing={refreshing} />
      }>
      {!error && loading && <Loading style={{ margin: 16 }} />}

      {!error && !loading && (
        <>
          <Title>Toque para selecionar uma estilo musical</Title>

          <RoundButtonContainer>
            {styles.map(style => (
              <Style
                key={String(style.id)}
                style={style}
                onPress={() => handleSelect(style.id)}
              />
            ))}
          </RoundButtonContainer>
        </>
      )}

      {error && !loading && <ErrorContainer onPress={() => getSkills()} />}
    </ContentContainer>
  );
}
