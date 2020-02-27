import React from 'react';
import PropTypes from 'prop-types';

import { RoundButton, RoundButtonText, SelectionIcon } from '../styles';

function SkillLevel({ skillLevel, ...rest }) {
  return (
    <RoundButton {...rest}>
      {skillLevel.selected && (
        <SelectionIcon name="check" size={16} style={{ marginHorizontal: 8 }} />
      )}

      <RoundButtonText selected={skillLevel.selected}>
        {skillLevel.name}
      </RoundButtonText>
    </RoundButton>
  );
}

SkillLevel.propTypes = {
  skillLevel: PropTypes.shape({
    name: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
};

export default React.memo(SkillLevel);
