import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSkillLevel } from '~/store/modules/filters/actions';

import SkillLevel from './SkillLevel';

import { ContentContainer, Title } from '../styles';

export default function StyleList() {
  const dispatch = useDispatch();
  const skillLevels = useSelector(state => state.filters.skillLevels);

  function handleSelect(id) {
    dispatch(selectSkillLevel(id));
  }

  return (
    <ContentContainer>
      <Title>Toque para selecionar um nível de habilidade</Title>

      {skillLevels.map(skillLevel => (
        <SkillLevel
          key={String(skillLevel.value)}
          skillLevel={skillLevel}
          onPress={() => handleSelect(skillLevel.value)}
        />
      ))}
    </ContentContainer>
  );
}
