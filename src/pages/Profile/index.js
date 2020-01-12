import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUserRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';
import InfoItem from '~/components/InfoItem';
import ItemTitleButton from '~/components/ItemTitleButton';
import Band from '~/components/Band';
import Skill from '~/components/Skill';

import {
  Container,
  Loading,
  LoadingContainer,
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

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  useEffect(() => {
    if (!profile) {
      dispatch(loadUserRequest());
    }
  }, [dispatch, profile]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      {/* {!loading && profile ? ( */}
      <>
        <Avatar />

        <Nickname>#MattZ6</Nickname>
        <Name>Matheus Felipe Zanin</Name>

        <SectionTitle>Informações básicas</SectionTitle>

        {/* <InfoItem
          label="Nome"
          value="Matheus Felipe Zanin"
          icon="person-outline"
        />
        <InfoItem label="E-mail" value="hub@email.com.br" icon="mail-outline" /> */}

        <ItemTitleButton
          title="Matheus Felipe Zanin"
          description="Editar meu nome"
          icon="person-outline"
        />

        <ItemTitleButton
          style={{ marginTop: 8 }}
          title="matt@hub.com.br"
          description="Alterar meu e-mail"
          icon="mail-outline"
        />

        <ItemTitleButton
          style={{ marginTop: 8 }}
          title="Senha"
          description="Alterar minha senha"
          icon="lock-outline"
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
      </>
      {/* ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )} */}
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Perfil',
};
