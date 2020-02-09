import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  Container,
  Toolbar,
  Shadow,
  Title,
  ButtonContainer,
  HeaderButton,
  HeaderIcon,
} from './styles';

function Header({ navigation, showBackButton, title }) {
  function handleBack() {
    navigation.pop();
  }

  return (
    <Container>
      <Toolbar>
        <ButtonContainer>
          {showBackButton && (
            <HeaderButton onPress={handleBack}>
              <HeaderIcon name="arrow-back" />
            </HeaderButton>
          )}
        </ButtonContainer>

        {title && <Title>{title}</Title>}

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
