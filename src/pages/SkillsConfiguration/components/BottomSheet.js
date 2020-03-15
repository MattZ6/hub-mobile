import React from 'react';
import PropTypes from 'prop-types';

import SkillLevel from './SkillLevel';

import {
  BottomSheetContainer,
  BottomSheetContent,
  SkillLevelContainer,
  SkillLevelHint,
  SkillLevelList,
  ButtonsContainer,
  BottomButton,
  BottomButtonText,
} from '../styles';

function BottomSheet({ skill, onConfirm, onRemove }) {
  const [showRemove] = React.useState(skill && skill.skillLevel);

  const [selected, setSelected] = React.useState(
    skill ? skill.skillLevel : null
  );

  function handleSelect(level) {
    setSelected(level);
  }

  return (
    <BottomSheetContainer>
      <BottomSheetContent>
        <SkillLevelContainer>
          <SkillLevelHint>
            {skill &&
              `Como você caracteriza seu nível de habilidade como ${skill.label}?`}
          </SkillLevelHint>

          <SkillLevelList>
            <SkillLevel
              level={1}
              selected={selected === 1}
              onPress={() => handleSelect(1)}
            />
            <SkillLevel
              level={2}
              selected={selected === 2}
              onPress={() => handleSelect(2)}
            />
            <SkillLevel
              level={3}
              selected={selected === 3}
              onPress={() => handleSelect(3)}
            />
          </SkillLevelList>
        </SkillLevelContainer>

        <ButtonsContainer single={!showRemove}>
          {showRemove && (
            <BottomButton onPress={onRemove}>
              <BottomButtonText>Remover</BottomButtonText>
            </BottomButton>
          )}

          <BottomButton
            disabled={!selected}
            border
            onPress={() => onConfirm(selected)}>
            <BottomButtonText confirm>Confirmar</BottomButtonText>
          </BottomButton>
        </ButtonsContainer>
      </BottomSheetContent>
    </BottomSheetContainer>
  );
}

BottomSheet.propTypes = {
  skill: PropTypes.shape({
    label: PropTypes.string,
    skillLevel: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default BottomSheet;
