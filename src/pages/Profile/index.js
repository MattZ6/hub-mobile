import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import Header from '~/components/Header';
import SectionTitle from '~/components/SectionTitle';
import SkillList from '~/components/SkillList';

import { Container, Avatar, Item, PinItem, Hint, SignOuButton } from './styles';

import WhatsIcon from '~/assets/icons/whatsapp.png';
import ButtonClear from '~/components/ButtonClear';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();

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

  function navigateToRegionSelect() {
    navigation.navigate('SelectLocation', { fromProfile: true });
  }

  function navigateToChangeWhatsApp() {
    navigation.navigate('ChangeWhatsApp');
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Header showBackButton title="Perfil" />

      <Container>
        <Avatar source={{ uri: `https:i.pravatar.cc/200?u=${profile.id}` }} />

        <Item
          title={profile.nickname}
          description="Alterar meu apelido"
          rightIcon="local-play"
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

        <SectionTitle
          style={{ marginHorizontal: 16, marginBottom: 16, marginTop: 32 }}>
          Cidade atual
        </SectionTitle>

        <PinItem
          title={profile.region.name}
          description="Alterar minha cidade atual"
          leftIcon="room"
          onPress={navigateToRegionSelect}
        />

        <SectionTitle
          style={{ marginHorizontal: 16, marginBottom: 16, marginTop: 32 }}>
          Contato
        </SectionTitle>

        {!profile.whatsapp && (
          <Hint>
            Adicionando seu número do WhatsApp fica fácil entrar em contato com
            você
          </Hint>
        )}

        <Item
          title={profile.whatsapp || 'Adicionar meu WhatsApp'}
          description={profile.whatsapp ? 'Alterar meu WhatsApp' : null}
          rightSrc={WhatsIcon}
          onPress={navigateToChangeWhatsApp}
        />

        <SectionTitle
          style={{ marginHorizontal: 16, marginBottom: 8, marginTop: 32 }}>
          Minhas habilidades
        </SectionTitle>

        <ButtonClear onPress={() => {}}>+ Adicionar habilidade</ButtonClear>

        <SectionTitle
          style={{
            marginHorizontal: 16,
            marginBottom: 8,
            marginTop: 32,
          }}>
          Meus gostos musicais
        </SectionTitle>

        <ButtonClear onPress={() => {}}>Ver todos</ButtonClear>

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
