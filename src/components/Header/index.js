import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles';

import {
  Container,
  Toolbar,
  Shadow,
  Title,
  ButtonContainer,
  HeaderButton,
} from './styles';

function Header({ navigation, showBackButton, title }) {
  function handleBack() {
    navigation.pop();
  }

  function handleNavigateToSearch() {
    navigation.navigate('SearchMusicians');
  }

  function handleNavigateProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <Toolbar>
        <ButtonContainer>
          {showBackButton && (
            <HeaderButton borderless onPress={handleBack}>
              <Icon
                name="arrow-back"
                size={24}
                color={colors.inputPlaceholderColor}
              />
            </HeaderButton>
          )}
        </ButtonContainer>

        {title && <Title>{title}</Title>}

        {/* <HeaderButton onPress={handleNavigateToSearch} borderless>
        <Icon name="search" size={28} color={colors.white} />
      </HeaderButton>

      <HeaderButton onPress={handleNavigateProfile}>
        <Icon name="person" size={28} color={colors.white} />
      </HeaderButton> */}

        <ButtonContainer />
      </Toolbar>

      <Shadow />
    </Container>
  );
}

export default withNavigation(Header);

Header.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
};

Header.defaultProps = {
  title: null,
  showBackButton: false,
};
