import React from 'react';
import PropTypes from 'prop-types';

import SkillLevel from './components/SkillLevel';

import {
  BottomSheetContainer,
  BottomSheetContent,
  SkillLevelContainer,
  SkillLevelHint,
  SkillLevelList,
  ButtonsContainer,
  BottomButton,
  BottomButtonText,
} from './styles';

function BottomSheet({
  skillLabel,
  skillLevel,
  showRemoveButton,
  onConfirm,
  onRemove,
}) {
  const [selected, setSelected] = React.useState(skillLevel);

  function handleSelect(level) {
    setSelected(level);
  }

  return (
    <BottomSheetContainer>
      <BottomSheetContent>
        <SkillLevelContainer>
          <SkillLevelHint>
            {skillLabel
              ? `Como você caracteriza seu nível de habilidade como ${skillLabel}?`
              : 'Como você caracteriza seu nível de habilidade com este instrumento?'}
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

        <ButtonsContainer single={!showRemoveButton}>
          {showRemoveButton && onRemove && (
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
  skillLabel: PropTypes.string,
  skillLevel: PropTypes.number.isRequired,
  showRemoveButton: PropTypes.bool,
  onRemove: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
};

BottomSheet.defaultProps = {
  skillLabel: null,
  showRemoveButton: false,
  onRemove: null,
};

export default BottomSheet;
