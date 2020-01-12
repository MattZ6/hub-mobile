import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUserRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';

import {
  Container,
  Loading,
  LoadingContainer,
  Name,
  Nickname,
  SignOuButton,
  ButtonText,
} from './styles';

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
      {!loading && profile ? (
        <>
          <Avatar />

          <Nickname>#{profile.nickname}</Nickname>
          <Name>{profile.name}</Name>
          {/* <Name>{profile.email}</Name> */}

          <SignOuButton onPress={handleSignOut}>
            <ButtonText>Sair da minha conta</ButtonText>
          </SignOuButton>
        </>
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Perfil',
};
