import React from 'react';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SectionTitle from '~/components/SectionTitle';

import { PinItem } from '../styles';

function City({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  function navigateToRegionSelect() {
    navigation.navigate('SelectLocation', { fromProfile: true });
  }

  return (
    <>
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
    </>
  );
}

City.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(City);
