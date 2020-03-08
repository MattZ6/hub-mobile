import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import Button from '~/components/Button';
import ButtonClear from '~/components/ButtonClear';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import {
  updateProfileRequest,
  updateUserStylePreferencesConfiguration,
} from '~/store/modules/user/actions';

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
  const updating = useSelector(state => state.user.updating);

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

  function handleCompleteLater() {
    const data = {
      first_styles_configuration: true,
    };

    dispatch(updateProfileRequest(data));
  }

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <>
      <Header title="Preferências" />

      <Container>
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
                    disabled={submiting || updating}
                    onPress={() => handleToggleSelect(x.id)}
                    key={String(x.id)}>
                    {x.selected && <SelectedIcon />}

                    <StyleName selected={x.selected}>{x.name}</StyleName>
                  </Style>
                ))}
              </StylesContainer>
            </Scroll>

            {/* {showButton && ( */}
            {/* <FooterButton
            text="Salvar"
            buttonProps={{ loading: submiting }}
            onPress={handleSubmit}
          /> */}
            {/* )} */}

            <FooterContainer>
              <Button loading={submiting || updating} onPress={handleSubmit}>
                Salvar
              </Button>
              <ButtonClear
                disabled={submiting || updating}
                onPress={handleCompleteLater}>
                Deixar pra depois...
              </ButtonClear>
            </FooterContainer>
          </>
        )}
      </Container>
    </>
  );
}
