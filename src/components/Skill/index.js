import React from 'react';

import { Container, Title, Level } from './styles';

export default function Skill({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Level>Iniciante</Level>
    </Container>
  );
}
