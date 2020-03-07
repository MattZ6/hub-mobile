import React from 'react';
import PropTypes from 'prop-types';

import {
  SectionTitle,
  Skill,
  SkillInfoContainer,
  SkillTitle,
  SkillDescription,
  SkillLevelContainer,
  SkillLevel,
} from '../styles';

export default function Skills({ skills }) {
  return (
    <>
      <SectionTitle>Habilidades</SectionTitle>

      {skills.map(skill => (
        <Skill key={String(skill.id)}>
          <SkillInfoContainer>
            <SkillTitle>{skill.instrument_label}</SkillTitle>
            <SkillDescription>{skill.skill_level_label}</SkillDescription>
          </SkillInfoContainer>

          <SkillLevelContainer>
            <SkillLevel gold={skill.skill_level >= 3} />
            <SkillLevel gold={skill.skill_level >= 2} />
            <SkillLevel gold={skill.skill_level >= 1} />
          </SkillLevelContainer>
        </Skill>
      ))}
    </>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      instrument_label: PropTypes.string,
      skill_level_label: PropTypes.string,
      skill_level: PropTypes.number,
    })
  ).isRequired,
};
