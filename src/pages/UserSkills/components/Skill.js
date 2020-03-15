import React from 'react';
import PropTypes from 'prop-types';

import {
  SkillContainer,
  SkillInfo,
  SkillTitle,
  SkillDescription,
  RemoveButton,
  StyledIcon,
} from '../styles';

function Skill({ skill, removeEnabled, ...rest }) {
  return (
    <SkillContainer disabled={removeEnabled} {...rest}>
      <StyledIcon name="whatshot" />

      <SkillInfo>
        <SkillTitle>{skill.instrument_label}</SkillTitle>
        <SkillDescription>{skill.skill_level_label}</SkillDescription>
      </SkillInfo>

      {removeEnabled && (
        <RemoveButton>
          <StyledIcon name="clear" />
        </RemoveButton>
      )}
    </SkillContainer>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    instrument_label: PropTypes.string,
    skill_level_label: PropTypes.string,
  }).isRequired,
  removeEnabled: PropTypes.bool,
};

Skill.defaultProps = {
  removeEnabled: false,
};

export default React.memo(Skill);
