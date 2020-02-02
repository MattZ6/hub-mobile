import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/Header';
import SectionTitle from '~/components/SectionTitle';
import SkillList from '~/components/SkillList';

import { Container, Avatar, Item, PinItem, SignOuButton } from './styles';

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
    <>
      <Header showBackButton title="Perfil" />

      <Container>
        <Avatar source={{ uri: `https:i.pravatar.cc/200?u=${profile.id}` }} />

        {/* <Nickname>#{profile.nickname}</Nickname> */}

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

        <SectionTitle
          style={{ marginHorizontal: 16, marginBottom: 16, marginTop: 32 }}>
          Cidade atual
        </SectionTitle>

        <PinItem
          title="Guarapuava, PR"
          description="Alterar minha cidade atual"
          leftIcon="room"
        />

        <SkillList
          title="Minhas habilidade"
          editable
          titleStyle={{ marginHorizontal: 16, marginBottom: 16, marginTop: 32 }}
        />

        <SignOuButton round={false} onPress={handleSignOut}>
          Sair da minha conta
        </SignOuButton>
      </Container>
    </>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
