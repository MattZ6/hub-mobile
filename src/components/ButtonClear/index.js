import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from '~/components/ButtonClear/styles';

export default function ButtonClear({
  children,
  disabled,
  round,
  textProps,
  ...rest
}) {
  return (
    <Container activeOpacity={0.6} {...rest} disabled={disabled} round={round}>
      <Title disabled={disabled} {...textProps}>
        {children}
      </Title>
    </Container>
  );
}

ButtonClear.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
};

ButtonClear.defaultProps = {
  disabled: false,
  round: true,
};
