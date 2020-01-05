import React from 'react';

import { Container } from '~/components/Background/styles';

export default function Background({ style, children }) {
  return <Container style={style}>{children}</Container>;
}
