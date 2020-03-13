import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { setUserStyles } from '~/store/modules/userStyles/actions';

import SectionTitle from '~/components/SectionTitle';
import Loading from '~/components/Loading';
import ButtonClear from '~/components/ButtonClear';

import {
  StyleList,
  Style,
  StyleTitle,
  Hint,
  RoundButton,
  RoundButtonTitle,
} from '../styles';

function Styles({ navigation }) {
  const dispatch = useDispatch();

  const styles = useSelector(state => state.userStyles.userStyles);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleNavigate() {
    navigation.navigate('UserStylePreferences');
  }

  async function getStyles() {
    if (styles) {
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const { data } = await api.get('/v1/preferences');

      dispatch(setUserStyles(data));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getStyles();
  }, []);

  return (
    <>
      <SectionTitle style={{ margin: 16 }}>Meus gostos musicais</SectionTitle>

      {!error && !loading && styles && (
        <>
          {styles.length > 0 && (
            <>
              <StyleList
                data={styles}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Style>
                    <StyleTitle>{item.style.name}</StyleTitle>
                  </Style>
                )}
              />

              <ButtonClear
                style={{ marginTop: 8 }}
                onPress={handleNavigate}
                textProps={{ style: { color: 'white' } }}>
                Gerenciar
              </ButtonClear>
            </>
          )}

          {styles.length === 0 && (
            <>
              <Hint>
                Adicionar seus gostos musicias pode te ajudar a encontrar
                pessoas com gostos parecidos
              </Hint>

              <RoundButton
                onPress={handleNavigate}
                green
                style={{ marginTop: 8 }}>
                <RoundButtonTitle green>Adicionar</RoundButtonTitle>
              </RoundButton>
            </>
          )}
        </>
      )}

      {!error && loading && <Loading style={{ marginTop: 2 }} />}

      {!loading && error && (
        <RoundButton onPress={getStyles}>
          <RoundButtonTitle>Tentar novamente</RoundButtonTitle>
        </RoundButton>
      )}
    </>
  );
}

Styles.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Styles);
