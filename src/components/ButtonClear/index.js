import React from 'react';

import { Container, Title } from './styles';

export default function ButtonClear({ children, disabled, ...rest }) {
  return (
    <Container {...rest} enabled={!disabled}>
      <Title disabled={disabled}>{children}</Title>
    </Container>
  );
}
