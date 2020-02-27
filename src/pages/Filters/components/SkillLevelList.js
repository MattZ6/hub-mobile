import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSkillLevel } from '~/store/modules/filters/actions';

import Style from './Style';

import { ContentContainer, RoundButtonContainer, Title } from '../styles';

export default function StyleList() {
  const dispatch = useDispatch();
  const skillLevels = useSelector(state => state.filters.skillLevels);

  function handleSelect(id) {
    dispatch(selectSkillLevel(id));
  }

  return (
    <ContentContainer>
      <Title>Nível de habilidade</Title>

      <RoundButtonContainer>
        {skillLevels.map(skillLevel => (
          <Style
            key={String(skillLevel.value)}
            style={skillLevel}
            onPress={() => handleSelect(skillLevel.value)}
          />
        ))}
      </RoundButtonContainer>
    </ContentContainer>
  );
}
