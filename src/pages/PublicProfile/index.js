import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Error from '~/components/Error';
import Avatar from '~/components/Avatar';
// import SectionTitle from '~/components/SectionTitle';
import SkillList from '~/components/SkillList';

import {
  InfoContainer,
  Header,
  NickContent,
  Nick,
  NameContent,
  Name,
  AddressContent,
  AddressIcon,
  AddressText,
  Content,
} from './styles';

import Loading from './components/Loading';

// const bands = [
//   {
//     id: 1,
//     title: 'Machine Head',
//     image: null,
//     skills: [
//       { id: 1, label: 'Guitarrista' },
//       { id: 2, label: 'Vocalista' },
//     ],
//   },
//   {
//     id: 2,
//     title: "Time Won't Wait",
//     image: null,
//     skills: [{ id: 1, label: 'Guitarrista' }],
//   },
//   {
//     id: 3,
//     title: 'Queens of the Stone Age',
//     image: null,
//     skills: [{ id: 3, label: 'Baterista' }],
//   },
//   {
//     id: 4,
//     title: 'Queens of the Stone Age',
//     image: null,
//     skills: [{ id: 3, label: 'Baterista' }],
//   },
//   {
//     id: 5,
//     title: 'Queens of the Stone Age',
//     image: null,
//     skills: [{ id: 3, label: 'Baterista' }],
//   },
// ];

export default function PublicProfile({ navigation }) {
  const [id] = useState(navigation.getParam('id'));
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  async function loadMusician() {
    setError(false);

    try {
      const { data } = await api.get(`/v1/musicians/${id}`);

      setUser(data);
    } catch (err) {
      setError(true);
    }
  }

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
      <Error
        title="Não foi possível carregar as informações do músico"
        tip="Clique para tentar novamente"
        style={{ paddingVertical: 32 }}
        onPress={loadMusician}
      />
    );
  }

  if (!user) {
    return <Loading />;
  }

  return (
    <Content>
      <InfoContainer>
        <Header>
          <Avatar id={id} size={120} style={{ marginVertical: 16 }} />
        </Header>

        {/* <NickContent>
          <Nick>#{user?.nickname}</Nick>
        </NickContent> */}

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
  );
}

PublicProfile.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
