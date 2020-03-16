import React from 'react';
import PropTypes from 'prop-types';

import SkillLevelStars from '~/components/SkillLevelStars';

import {
  SkillContainer,
  SkillInfo,
  SkillTitle,
  DeleteHint,
  RemoveButton,
  StyledIcon,
  Loader,
} from '../styles';

function Skill({
  skill,
  selected,
  loading,
  removeDisabled,
  removeEnabled,
  onSelect,
  ...rest
}) {
  const showRemove = removeEnabled && !selected && !loading;
  const showConfirm = removeEnabled && selected && !loading;
  const showLoading = loading;

  return (
    <SkillContainer disabled={removeEnabled} {...rest}>
      <StyledIcon name="stars" />

      <SkillInfo>
        <SkillLevelStars level={skill.skill_level} size={12} />
        <SkillTitle>{skill.instrument_label}</SkillTitle>
      </SkillInfo>

      {showConfirm && <DeleteHint>Toque para confirmar</DeleteHint>}

      {showRemove && (
        <RemoveButton
          onPress={() => onSelect(skill.id)}
          disabled={removeDisabled}>
          <StyledIcon name="clear" />
        </RemoveButton>
      )}

      {showConfirm && (
        <RemoveButton
          onPress={() => onSelect(skill.id)}
          disabled={removeDisabled}>
          <StyledIcon
            name={selected ? 'error-outline' : 'clear'}
            selected={selected}
          />
        </RemoveButton>
      )}

      {showLoading && <Loader size={20} />}
    </SkillContainer>
  );
}

Skill.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number,
    instrument_label: PropTypes.string,
    skill_level: PropTypes.number,
  }).isRequired,
  selected: PropTypes.bool,
  removeDisabled: PropTypes.bool,
  removeEnabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Skill.defaultProps = {
  selected: false,
  removeEnabled: false,
  removeDisabled: false,
  loading: false,
};

export default React.memo(Skill);
