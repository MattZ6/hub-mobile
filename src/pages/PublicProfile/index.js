import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Header from '~/components/Header';
import ErrorContainer from '~/components/ErrorContainer';
import Avatar from '~/components/Avatar';
// import SectionTitle from '~/components/SectionTitle';
import SkillList from '~/components/SkillList';

import {
  InfoContainer,
  // Header,
  NickContent,
  Nick,
  NameContent,
  Name,
  AddressContent,
  AddressIcon,
  AddressText,
  Content,
} from './styles';

// import Loading from './components/Loading';

export default function PublicProfile({ navigation }) {
  const [id] = useState(navigation.getParam('id'));
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  // const opacity = new Animated.Value(0);

  async function loadMusician() {
    setError(false);

    try {
      const { data } = await api.get(`/v1/musicians/${id}`);

      setUser(data);
    } catch (err) {
      setError(true);
    }
  }

  // function animate() {
  //   Animated.timing(opacity, {
  //     toValue: 1,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  // }

  useEffect(() => {
    async function getMusician() {
      setError(false);

      try {
        const { data } = await api.get(`/v1/musicians/${id}`);

        setUser(data);
      } catch (err) {
        setError(true);
      }
    }

    getMusician();
  }, [id]);

  if (error) {
    return (
      <ErrorContainer
        title="Não foi possível carregar as informações do músico"
        tip="Clique para tentar novamente"
        style={{ paddingVertical: 32, marginTop: 64 }}
        onPress={loadMusician}
      />
    );
  }

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Header showBackButton />

      <Content>
        <InfoContainer>
          <Avatar
            id={id}
            size={120}
            style={{ marginVertical: 16, alignSelf: 'center' }}
          />

          <NickContent>
            <Nick>#{user?.nickname}</Nick>
          </NickContent>

          <NameContent>
            <Name>{user?.name}</Name>
          </NameContent>

          <AddressContent>
            <AddressIcon />
            <AddressText>Guarapuava, PR, Brasil</AddressText>
          </AddressContent>
        </InfoContainer>

        <SkillList titleStyle={{ margin: 16 }} userId={id} />

        {/*  <SectionTitle>Bandas</SectionTitle>

        {bands.map(x => (
          <Band band={x} key={String(x.id)} />
        ))} */}
      </Content>
    </>
  );
}

PublicProfile.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
