import React from 'react';
import PropTypes from 'prop-types';

import {
  SkillButton,
  ButtonContent,
  ButtonTitle,
  ButtonDescription,
  SelectionIcon,
} from '../styles';

function Skill({ skill, ...rest }) {
  return (
    <SkillButton {...rest}>
      <ButtonContent>
        <ButtonTitle transform selected={skill.selected}>
          {skill.label}
        </ButtonTitle>
        <ButtonDescription>{skill.name}</ButtonDescription>
      </ButtonContent>

      {skill.selected && <SelectionIcon name="check" size={24} />}
    </SkillButton>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
};

export default React.memo(Skill);
