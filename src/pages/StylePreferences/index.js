import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import ErrorContainer from '~/components/ErrorContainer';
import Button from '~/components/Button';
import ButtonClear from '~/components/ButtonClear';
import Refresher from '~/components/Refresher';

import api from '~/services/api';
import { showSuccessSnack } from '~/services/toast';

import { throwRequestErrorMessage } from '~/utils/error';

import {
  updateProfileRequest,
  updateUserStylePreferencesConfiguration,
} from '~/store/modules/user/actions';

import { addUserStyle } from '~/store/modules/userStyles/actions';

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

export default function StylePreferences({ navigation }) {
  const dispatch = useDispatch();
  const updating = useSelector(state => state.user.updating);

  const [fromProfile] = React.useState(
    navigation.getParam('fromProfile', false)
  );

  const [musicStyles, setMusicStyles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [submiting, setSubmiting] = React.useState(false);

  async function getStyles(refresh = false) {
    if (!refreshing && !error && musicStyles.length > 0) {
      return;
    }

    setError(false);
    setRefreshing(refresh);
    setLoading(!refresh);

    try {
      const { data } = await api.get('/v1/styles');

      setMusicStyles(data);
    } catch (err) {
      setError(true);
    } finally {
      setRefreshing(false);
      setLoading(false);
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
      const { data: newStyles } = await api.post('/v1/preferences', data);

      if (fromProfile) {
        dispatch(addUserStyle(newStyles));

        navigation.pop();

        setTimeout(() => {
          showSuccessSnack('Gostos musicais atualizados com sucesso!');
        }, 150);
      } else {
        dispatch(updateUserStylePreferencesConfiguration(true));
      }
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

  function handleRefreshStyles() {
    getStyles(true);
  }

  function handleGetStyles() {
    getStyles();
  }

  React.useEffect(() => {
    handleGetStyles();
  }, []);

  return (
    <>
      <Header
        showBackButton={fromProfile}
        disableBack={refreshing || submiting}
        title={fromProfile ? 'Estilos musicais' : 'Preferências'}
      />

      <Container>
        {!loading && error && (
          <ErrorContainer
            icon="cloud-off"
            title="Verifique sua conexão com a internet"
            tip="Toque para tentar novamente"
            onPress={handleGetStyles}
          />
        )}

        {!error && loading && <Loading size={56} style={{ flex: 1 }} />}

        {!loading && !error && (
          <>
            <Scroll
              refreshControl={
                <Refresher
                  onRefresh={handleRefreshStyles}
                  refreshing={refreshing}
                  enabled={!error && !submiting && !loading}
                />
              }>
              <Description>
                {fromProfile
                  ? 'Toque em um estilo musical para seleciona-lo'
                  : 'Informar suas influências e estilos preferidos pode te ajudar a encontrar pessoas com gostos parecidos'}
              </Description>

              <StylesContainer>
                {musicStyles.map(x => (
                  <Style
                    disabled={submiting || updating || refreshing}
                    onPress={() => handleToggleSelect(x.id)}
                    key={String(x.id)}>
                    {x.selected && <SelectedIcon />}

                    <StyleName selected={x.selected}>{x.name}</StyleName>
                  </Style>
                ))}
              </StylesContainer>
            </Scroll>

            <FooterContainer>
              <Button loading={submiting || updating} onPress={handleSubmit}>
                Salvar
              </Button>
              {!fromProfile && (
                <ButtonClear
                  disabled={submiting || updating || refreshing}
                  onPress={handleCompleteLater}>
                  Deixar pra depois...
                </ButtonClear>
              )}
            </FooterContainer>
          </>
        )}
      </Container>
    </>
  );
}

StylePreferences.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
};
