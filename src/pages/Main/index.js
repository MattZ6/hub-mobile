import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, SerchButton } from '~/pages/Main/styles';

export default function Main({ navigation }) {
  function handleNavigateToSearch() {
    navigation.navigate('SearchMusicians');
  }

  function handleNavigateProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <Title>Home</Title>

      <SerchButton onPress={handleNavigateToSearch}>
        <Text>
          <Icon name="search" size={30} color="#fff" />
        </Text>
      </SerchButton>
      <SerchButton onPress={handleNavigateProfile}>
        <Text>
          <Icon name="person" size={30} color="#fff" />
        </Text>
      </SerchButton>
    </Container>
  );
}

Main.navigationOptions = {
  headerStyle: {
    backgroundColor: 'transparent',
  },
};
