import React from 'react';

import { Container, Content, Text } from './styles';

export default function OutlineButton({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <Text>{children}</Text>
      </Content>
    </Container>
  );
}
