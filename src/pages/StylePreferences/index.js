import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import Error from '~/components/Error';
import Button from '~/components/Button';
import ButtonClear from '~/components/ButtonClear';

import api from '~/services/api';

import {
  Container,
  Scroll,
  Description,
  StylesContainer,
  Style,
  StyleName,
  SelectedIcon,
  FooterContainer,
} from './styles';

const DURATION = 500;

export default function StylePreferences() {
  const [musicStyles, setMusicStyles] = useState(null);
  const [error, setError] = useState();

  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(0);

  function animateFooter() {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 0,
        duration: DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }

  async function getStyles() {
    setError(false);

    try {
      const { data } = await api.get('/v1/styles');

      setMusicStyles(data);
    } catch (err) {
      console.tron.error(err);
      setError(true);
    } finally {
      animateFooter();
    }
  }

  async function handleSubmit() {
    const styles = musicStyles.filter(x => x.selected).map(x => x.id);

    try {
      await api.post('/v1/preferences', { styles });
    } catch (err) {
      console.tron.error(err);
    }
  }

  useEffect(() => {
    getStyles();
  }, []);

  function handleToggleSelect(id) {
    const newData = musicStyles.map(x => ({
      ...x,
      selected: x.id === id ? !x.selected : x.selected,
    }));

    setMusicStyles(newData);
  }

  return (
    <Container>
      <Header title="Preferências" />

      {error && (
        <Error
          icon="cloud-off"
          title="Verifique sua conexão com a internet"
          tip="Toque para tentar novamente"
          onPress={getStyles}
        />
      )}

      {!error && !musicStyles && <Loading size={56} style={{ flex: 1 }} />}

      {musicStyles?.length >= 0 && (
        <>
          <Scroll>
            <Description>
              Informar suas influências e estilos musicais preferidos pode te
              ajudar a encontrar pessoas com gostos parecidos
            </Description>

            <StylesContainer>
              {musicStyles.map(x => (
                <Style
                  onPress={() => handleToggleSelect(x.id)}
                  key={String(x.id)}>
                  {x.selected && <SelectedIcon />}

                  <StyleName selected={x.selected}>{x.name}</StyleName>
                </Style>
              ))}
            </StylesContainer>
          </Scroll>

          {/* <Animated.View
            style={{
              opacity,
              transform: [{ translateY }],
            }}> */}
          <FooterContainer>
            <Button style={{ marginTop: 8 }} onPress={handleSubmit}>
              Batata
            </Button>
            {/* <ButtonClear style={{ marginTop: 8, height: 38 }}>
              Deixar para depois...
            </ButtonClear> */}
          </FooterContainer>
          {/* </Animated.View> */}
        </>
      )}
    </Container>
  );
}
