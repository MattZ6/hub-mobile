import React from 'react';
import PropTypes from 'prop-types';

import SkillLevelStars from '~/components/SkillLevelStars';

import {
  SkillLevelButton,
  SkillLevelContent,
  SkillTitle,
  SkillSelectedIcon,
} from '../styles';

function SkillLevel({ level, selected, ...rest }) {
  return (
    <SkillLevelButton {...rest}>
      <SkillLevelContent>
        <SkillLevelStars level={level} />

        <SkillTitle>
          {level === 1 && 'Iniciante'}
          {level === 2 && 'Intermediário'}
          {level === 3 && 'Avançado'}
        </SkillTitle>
      </SkillLevelContent>

      {selected && <SkillSelectedIcon />}
    </SkillLevelButton>
  );
}

SkillLevel.propTypes = {
  level: PropTypes.number.isRequired,
  selected: PropTypes.bool,
};

SkillLevel.defaultProps = {
  selected: false,
};

export default React.memo(SkillLevel);
