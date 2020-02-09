import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import Button from '~/components/Button';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import { updateUserStylePreferencesConfiguration } from '~/store/modules/user/actions';

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

export default function StylePreferences() {
  const dispatch = useDispatch();

  const [musicStyles, setMusicStyles] = useState(null);
  const [error, setError] = useState(false);
  const [submiting, setSubmiting] = useState(false);

  async function getStyles() {
    setError(false);

    try {
      const { data } = await api.get('/v1/styles');

      setMusicStyles(data);
    } catch (err) {
      setError(true);
    }
  }

  async function handleSubmit() {
    const styles = musicStyles.filter(x => x.selected).map(x => x.id);

    if (styles.length === 0) {
      return;
    }

    setSubmiting(true);

    const data = { styles };

    try {
      await api.post('/v1/preferences', data);

      dispatch(updateUserStylePreferencesConfiguration(true));
    } catch (err) {
      throwRequestErrorMessage(err);

      setSubmiting(false);
    }
  }

  function handleToggleSelect(id) {
    const newData = musicStyles.map(x => ({
      ...x,
      selected: x.id === id ? !x.selected : x.selected,
    }));

    setMusicStyles(newData);
  }

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <Container>
      <Header title="Preferências" />

      {error && (
        <ErrorContainer
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
              Informar suas influências e estilos preferidos pode te ajudar a
              encontrar pessoas com gostos parecidos
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

          <FooterContainer>
            <Button
              style={{ marginTop: 8 }}
              enabled={!submiting}
              loading={submiting}
              onPress={handleSubmit}>
              Salvar
            </Button>
          </FooterContainer>
        </>
      )}
    </Container>
  );
}
