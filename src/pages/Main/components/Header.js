import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles';

import { HeaderContainer, HeaderButton } from '../styles';

function Header({ navigation }) {
  function handleNavigateToSearch() {
    navigation.navigate('SearchMusicians');
  }

  function handleNavigateProfile() {
    navigation.navigate('Profile');
  }

  return (
    <HeaderContainer>
      <HeaderButton onPress={handleNavigateToSearch} borderless>
        <Icon name="search" size={28} color={colors.white} />
      </HeaderButton>

      <HeaderButton onPress={handleNavigateProfile}>
        <Icon name="person" size={28} color={colors.white} />
      </HeaderButton>
    </HeaderContainer>
  );
}

export default withNavigation(Header);
