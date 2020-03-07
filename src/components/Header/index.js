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

function Header({
  navigation,
  showBackButton,
  disableBack,
  title,
  showsRightButton,
  rightIcon,
  rightButtonProps,
}) {
  function handleBack() {
    navigation.pop();
  }

  return (
    <Container>
      <Toolbar>
        <ButtonContainer>
          {showBackButton && (
            <HeaderButton onPress={handleBack} disabled={disableBack}>
              <HeaderIcon name="arrow-back" />
            </HeaderButton>
          )}
        </ButtonContainer>

        {title && <Title>{title}</Title>}

        <ButtonContainer>
          {showsRightButton && (
            <HeaderButton {...rightButtonProps}>
              <HeaderIcon name={rightIcon} />
            </HeaderButton>
          )}
        </ButtonContainer>
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
  disableBack: PropTypes.bool,
  showsRightButton: PropTypes.bool,
  rightButtonProps: PropTypes.shape({}),
  rightIcon: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  showBackButton: false,
  disableBack: false,
  showsRightButton: false,
  rightButtonProps: null,
  rightIcon: null,
};
