import React from 'react';

import { Container, Title } from '~/components/ButtonClear/styles';

export default function ButtonClear({ children, disabled, ...rest }) {
  return (
    <Container {...rest} enabled={!disabled}>
      <Title disabled={disabled}>{children}</Title>
    </Container>
  );
}
