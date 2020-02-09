import React from 'react';
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
  rightIcon,
  rightIconColor,
  disabled,
  ...rest
}) {
  return (
    <Container {...rest} disabled={disabled}>
      {leftIcon && (
        <Left name={leftIcon} color={leftIconColor} invalid={rest.invalid} />
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
    </Container>
  );
}

ItemButton.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIcon: PropTypes.string,
  rightIconColor: PropTypes.string,
  disabled: PropTypes.bool,
};

ItemButton.defaultProps = {
  leftIcon: null,
  leftIconColor: null,
  rightIcon: null,
  rightIconColor: null,
  title: null,
  description: null,
  descriptionColor: null,
  disabled: false,
};
