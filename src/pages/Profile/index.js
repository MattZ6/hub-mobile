import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/Header';

import Picture from './components/Picture';
import Info from './components/Info';
import City from './components/City';
import Contact from './components/Contact';
import Styles from './components/Styles';
import Skills from './components/Skills';

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
        <Picture />
        <Info />
        <City />
        <Contact />
        <Styles />
        <Skills />

        <SignOutButton onPress={handleSignOut}>
          Sair da minha conta
        </SignOutButton>
      </Container>
    </>
  );
}
