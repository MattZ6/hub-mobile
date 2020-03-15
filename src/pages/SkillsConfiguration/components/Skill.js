import React from 'react';
import PropTypes from 'prop-types';

import SkillLevelStars from '~/components/SkillLevelStars';

import {
  SkillButton,
  SkillInfo,
  SkillTitle,
  SkillDescription,
  LevelContent,
} from '../styles';

function Skill({ skill, ...rest }) {
  return (
    <SkillButton {...rest}>
      <SkillInfo>
        <SkillTitle selected={skill.skillLevel}>{skill.name}</SkillTitle>
        <SkillDescription>{skill.label}</SkillDescription>
      </SkillInfo>

      {skill.skillLevel && (
        <LevelContent>
          <SkillLevelStars level={skill.skillLevel} />
          <SkillDescription fontSize={12} style={{ marginTop: 4 }}>
            {skill.skillLevel === 1 && 'Iniciante'}
            {skill.skillLevel === 2 && 'Intermediário'}
            {skill.skillLevel === 3 && 'Avançado'}
          </SkillDescription>
        </LevelContent>
      )}
    </SkillButton>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    skillLevel: PropTypes.number,
  }).isRequired,
};

export default React.memo(Skill);
