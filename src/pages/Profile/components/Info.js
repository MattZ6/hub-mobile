import React from 'react';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Item } from '../styles';

function Info({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  function navigateToChangeNick() {
    navigation.navigate('ChangeNickname');
  }

  function navigateToChangeName() {
    navigation.navigate('UpdateName');
  }

  function navigateToChangeEmail() {
    navigation.navigate('ChangeEmail');
  }

  function navigateToChangePassword() {
    navigation.navigate('ChangePassword');
  }

  return (
    <>
      <Item
        title={profile.nickname}
        description="Alterar meu apelido"
        rightIcon="assignment-ind"
        onPress={navigateToChangeNick}
      />

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
    </>
  );
}

Info.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Info);
