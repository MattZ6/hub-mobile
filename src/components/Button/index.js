import React from 'react';

import { Container, Title, Loader } from '~/components/Button/styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest} enabled={!loading}>
      {loading ? <Loader size="large" /> : <Title>{children}</Title>}
    </Container>
  );
}
