import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from '~/components/ButtonClear/styles';

export default function ButtonClear({ children, disabled, round, ...rest }) {
  return (
    <Container {...rest} enabled={!disabled} round={round}>
      <Title disabled={disabled}>{children}</Title>
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
