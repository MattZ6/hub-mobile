import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import SectionTitle from '~/components/SectionTitle';

import WhatsIcon from '~/assets/icons/whatsapp.png';

import { Item, Hint } from '../styles';

function Contact({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  function navigateToChangeWhatsApp() {
    navigation.navigate('ChangeWhatsApp');
  }
  return (
    <>
      <SectionTitle
        style={{ marginHorizontal: 16, marginBottom: 16, marginTop: 32 }}>
        Contato
      </SectionTitle>

      {!profile.whatsapp && (
        <Hint>
          Adicione seu número de WhatsApp. Assim outros músicos podem entrar em
          contato com você
        </Hint>
      )}

      <Item
        title={profile.whatsapp || 'Adicionar meu WhatsApp'}
        description={profile.whatsapp ? 'Alterar meu WhatsApp' : null}
        rightSrc={WhatsIcon}
        onPress={navigateToChangeWhatsApp}
      />
    </>
  );
}

Contact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Contact);
