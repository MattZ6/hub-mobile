import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import SectionTitle from '~/components/SectionTitle';
import Loading from '~/components/Loading';

import {
  StyleList,
  Style,
  StyleTitle,
  TryAgainButton,
  TryAgainButtonTitle,
} from '../styles';

function Styles() {
  const [styles, setStyles] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function getStyles() {
    setError(false);
    setLoading(true);

    try {
      const { data } = await api.get('/v1/preferences');

      setStyles(data);
    } catch (err) {
      setError(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getStyles();
  }, []);

  return (
    <>
      <SectionTitle
        style={{ marginHorizontal: 16, marginBottom: 16, marginTop: 16 }}>
        Meus gostos musicais
      </SectionTitle>

      {!error && !loading && (
        <>
          <StyleList
            data={styles}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Style>
                <StyleTitle>{item.style.name}</StyleTitle>
                <Icon name="close" color="gray" />
              </Style>
            )}
          />

          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={{ color: 'green' }}>Adicionar</Text>
          </TouchableOpacity>
        </>
      )}

      {!error && loading && <Loading style={{ marginTop: 2 }} />}

      {error && !loading && (
        <TryAgainButton onPress={getStyles}>
          <TryAgainButtonTitle>Tentar novamente</TryAgainButtonTitle>
        </TryAgainButton>
      )}
    </>
  );
}

export default Styles;
