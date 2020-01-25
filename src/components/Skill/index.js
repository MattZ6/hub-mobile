import React from 'react';

import { Container, Title, Level, StyledIcon, IconButton } from './styles';

export default function Skill({ skill, editable = false }) {
  return (
    <Container>
      <Title>{skill.instrument_label}</Title>
      <Level>{skill.skill_level_label}</Level>

      {editable && (
        <IconButton>
          <StyledIcon />
        </IconButton>
      )}
    </Container>
  );
}
