import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Title,
  Label,
  CheckContainer,
  NotChecked,
  Check,
} from './styles';

export default function SkillSelect({ skill, check, enabled }) {
  function handleToggleCheck() {
    check();
  }

  return (
    <Container onPress={handleToggleCheck} enabled={enabled}>
      <Content>
        <Title>{skill.name}</Title>
        <Label>{skill.label}</Label>
      </Content>
      {skill.checked ? (
        <Check />
      ) : (
        <CheckContainer>
          <NotChecked />
        </CheckContainer>
      )}
    </Container>
  );
}

SkillSelect.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
  }).isRequired,
  check: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
};

SkillSelect.defaultProps = {
  enabled: true,
};
