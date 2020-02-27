import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMusicStyles,
  selectMusicStyle,
} from '~/store/modules/filters/actions';

import api from '~/services/api';

import Loading from '~/components/Loading';
import Style from './Style';

import { ContentContainer, RoundButtonContainer, Title } from '../styles';

export default function StyleList() {
  const dispatch = useDispatch();
  const styles = useSelector(state => state.filters.styles);

  const [loading, setLoading] = React.useState(false);

  function handleSelect(id) {
    dispatch(selectMusicStyle(id));
  }

  React.useEffect(() => {
    async function getSkills() {
      if (styles.length === 0) {
        setLoading(true);

        try {
          const { data } = await api.get('/v1/styles');
          dispatch(setMusicStyles(data));
        } catch (err) {
          console.tron.error(err);
        } finally {
          setLoading(false);
        }
      }
    }

    getSkills();
  }, []);

  return (
    <ContentContainer>
      <Title>Estilos musicais</Title>

      <>
        {loading ? (
          <Loading style={{ margin: 16 }} />
        ) : (
          <RoundButtonContainer>
            {styles.map(style => (
              <Style
                key={String(style.id)}
                style={style}
                onPress={() => handleSelect(style.id)}
              />
            ))}
          </RoundButtonContainer>
        )}
      </>
    </ContentContainer>
  );
}
