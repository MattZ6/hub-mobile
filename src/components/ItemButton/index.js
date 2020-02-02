import React from 'react';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Content, Title, Description, Left, Right } from './styles';

export default function ItemButton({
  title,
  description,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  ...rest
}) {
  return (
    <Container
      {...rest}
      // style={{
      //   paddingVertical: 16,
      //   paddingHorizontal: 8,
      //   flexDirection: 'row',
      //   alignItems: 'center',
      //   justifyContent: 'space-between',
      //   borderRadius: 0,
      //   backgroundColor: 'transparent',
      //   height: 48,
      // }}
    >
      {leftIcon && <Left name={leftIcon} color={leftIconColor} />}

      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>

      {rightIcon && <Right name={rightIcon} color={rightIconColor} />}
    </Container>
  );
}

ItemButton.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIcon: PropTypes.string,
  rightIconColor: PropTypes.string,
};

ItemButton.defaultProps = {
  leftIcon: null,
  leftIconColor: null,
  rightIcon: null,
  rightIconColor: null,
  description: null,
};
