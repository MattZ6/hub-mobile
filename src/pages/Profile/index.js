import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';

import { Container, Name, Nickname, SignOuButton, ButtonText } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar />

      <Nickname>#MattZ6</Nickname>
      <Name>Matheus Felipe Zanin</Name>

      <SignOuButton onPress={handleSignOut}>
        <ButtonText>Sair da minha conta</ButtonText>
      </SignOuButton>
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Perfil',
};
