import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';
import Band from '~/components/Band';
import Skill from '~/components/Skill';

import {
  Container,
  Nickname,
  Name,
  SectionTitle,
  Item,
  PinItem,
  SignOuButton,
} from './styles';

const bands = [
  {
    id: 1,
    title: 'Machine Head',
    image: null,
    skills: [
      { id: 1, label: 'Guitarrista' },
      { id: 2, label: 'Vocalista' },
    ],
  },
  {
    id: 2,
    title: "Time Won't Wait",
    image: null,
    skills: [{ id: 1, label: 'Guitarrista' }],
  },
  {
    id: 3,
    title: 'Queens of the Stone Age',
    image: null,
    skills: [{ id: 3, label: 'Baterista' }],
  },
];

export default function Profile({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function navigateToChangeName() {
    navigation.navigate('UpdateName');
  }

  function navigateToChangeEmail() {
    navigation.navigate('ChangeEmail');
  }

  function navigateToChangePassword() {
    navigation.navigate('ChangePassword');
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar />

      <Nickname>#{profile.nickname}</Nickname>
      {/* <Name>{profile.name}</Name> */}

      <SectionTitle>Informações básicas</SectionTitle>

      <Item
        title={profile.name}
        description="Editar meu nome"
        rightIcon="person-outline"
        onPress={navigateToChangeName}
      />

      <Item
        title={profile.email}
        description="Alterar meu e-mail"
        rightIcon="mail-outline"
        onPress={navigateToChangeEmail}
      />

      <Item
        title="Senha"
        description="Alterar minha senha"
        rightIcon="lock-outline"
        onPress={navigateToChangePassword}
      />

      <SectionTitle>Cidade atual</SectionTitle>

      <PinItem
        title="Guarapuava, PR"
        description="Alterar minha cidade atual"
        leftIcon="room"
      />

      <SectionTitle>Minhas habilidades</SectionTitle>

      <Skill title="Guitarrista" />
      <Skill title="Baterista" />
      <Skill title="Batersta" />
      <Skill title="Trompetista" />

      <SectionTitle>Minhas bandas</SectionTitle>

      <Band band={bands[0]} />
      <Band band={bands[1]} />
      <Band band={bands[2]} />

      <SignOuButton round={false} onPress={handleSignOut}>
        Sair da minha conta
      </SignOuButton>
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Perfil',
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
