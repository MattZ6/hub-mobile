import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';
import ItemTitleButton from '~/components/ItemTitleButton';
import Band from '~/components/Band';
import Skill from '~/components/Skill';

import {
  Container,
  Nickname,
  Name,
  SectionTitle,
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

  function handleSignOut() {
    dispatch(signOut());
  }

  function navigateToChangeName() {
    navigation.navigate('UpdateName');
  }

  function navigateToChangeEmail() {}

  function navigateToChangePassword() {
    navigation.navigate('ChangePassword');
  }

  return (
    <Container>
      <Avatar />

      <Nickname>#{profile.nickname}</Nickname>
      <Name>{profile.name}</Name>

      <SectionTitle>Informações básicas</SectionTitle>

      <ItemTitleButton
        title={profile.name}
        description="Editar meu nome"
        icon="person-outline"
        onPress={navigateToChangeName}
      />

      <ItemTitleButton
        style={{ marginTop: 8 }}
        title={profile.email}
        description="Alterar meu e-mail"
        icon="mail-outline"
        onPress={navigateToChangeEmail}
      />

      <ItemTitleButton
        style={{ marginTop: 8 }}
        title="Senha"
        description="Alterar minha senha"
        icon="lock-outline"
        onPress={navigateToChangePassword}
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
