import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/Header';

import Info from './components/Info';
import City from './components/City';
import Contact from './components/Contact';
import Styles from './components/Styles';

import { Container, SignOutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Header showBackButton title="Perfil" />

      <Container>
        <Info />
        <City />
        <Contact />
        <Styles />

        <SignOutButton onPress={handleSignOut}>
          Sair da minha conta
        </SignOutButton>
      </Container>
    </>
  );
}
