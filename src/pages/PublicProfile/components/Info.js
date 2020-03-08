import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '~/components/Avatar';

import {
  InfoContainer,
  Nick,
  Name,
  AddressContent,
  AddressIcon,
  AddressText,
  ContactButton,
  WhatsIcon,
  ContactButtonTitle,
} from '../styles';

export default function Info({ user }) {
  function openWhatsApp() {
    console.tron.log(user.whatsapp);
  }

  return (
    <InfoContainer>
      <Avatar
        name={user.name}
        size={120}
        style={{ marginBottom: 16, alignSelf: 'center' }}
      />

      <Nick>#{user.nickname}</Nick>

      <Name>{user.name}</Name>

      <AddressContent showBottomLine={!user.whatsapp}>
        <AddressIcon />
        <AddressText>{user.region.name}</AddressText>
      </AddressContent>

      {user.whatsapp && (
        <ContactButton onPress={openWhatsApp}>
          <WhatsIcon source={require('~/assets/icons/whatsapp.png')} />
          <ContactButtonTitle>Entrar em contato</ContactButtonTitle>
        </ContactButton>
      )}
    </InfoContainer>
  );
}

Info.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    name: PropTypes.string,
    whatsapp: PropTypes.string,
    region: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
