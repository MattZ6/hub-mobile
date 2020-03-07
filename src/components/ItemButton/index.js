import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Title,
  Description,
  ErrorMessage,
  Left,
  Right,
} from './styles';

export default function ItemButton({
  title,
  description,
  descriptionColor,
  leftIcon,
  leftIconColor,
  leftSrc,
  rightIcon,
  rightIconColor,
  rightSrc,
  disabled,
  ...rest
}) {
  return (
    <Container {...rest} disabled={disabled}>
      {leftIcon && (
        <Left name={leftIcon} color={leftIconColor} invalid={rest.invalid} />
      )}

      {leftSrc && (
        <Image
          source={leftSrc}
          width={30}
          height={30}
          style={{ width: 28, height: 28, marginRight: 16 }}
        />
      )}

      <Content>
        {title && <Title>{title}</Title>}
        {description && !rest.invalid && (
          <Description color={descriptionColor}>{description}</Description>
        )}

        {rest.invalid && rest.errorMessage && (
          <ErrorMessage>{rest.errorMessage}</ErrorMessage>
        )}
      </Content>

      {rightIcon && <Right name={rightIcon} color={rightIconColor} />}

      {rightSrc && (
        <Image
          source={rightSrc}
          width={30}
          height={30}
          style={{ width: 28, height: 28, marginLeft: 16 }}
        />
      )}
    </Container>
  );
}

ItemButton.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  leftSrc: PropTypes.number,
  rightIcon: PropTypes.string,
  rightSrc: PropTypes.number,
  rightIconColor: PropTypes.string,
  disabled: PropTypes.bool,
};

ItemButton.defaultProps = {
  leftIcon: null,
  leftIconColor: null,
  leftSrc: null,
  rightIcon: null,
  rightIconColor: null,
  rightSrc: null,
  title: null,
  description: null,
  descriptionColor: null,
  disabled: false,
};
