import React from 'react';
import PropTypes from 'prop-types';

import {
  SkillLevelButton,
  Star,
  SkillLevelContainer,
  StarContainer,
  SkillLevelTitle,
  SelectionIcon,
} from '../styles';

function SkillLevel({ skillLevel, ...rest }) {
  return (
    <SkillLevelButton {...rest}>
      <SkillLevelContainer>
        <StarContainer>
          <Star gold={skillLevel.value >= 1} />
          <Star gold={skillLevel.value >= 2} />
          <Star gold={skillLevel.value >= 3} />
        </StarContainer>
        <SkillLevelTitle selected={skillLevel.selected}>
          {skillLevel.name}
        </SkillLevelTitle>
      </SkillLevelContainer>

      {skillLevel.selected && (
        <SelectionIcon name="check" size={24} style={{ marginLeft: 8 }} />
      )}
    </SkillLevelButton>
  );
}

SkillLevel.propTypes = {
  skillLevel: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
    selected: PropTypes.bool,
  }).isRequired,
};

export default React.memo(SkillLevel);
