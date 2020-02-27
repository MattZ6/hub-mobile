import React from 'react';

import Header from '~/components/Header';

import StyleList from './components/StyleList';
import SkillLevelList from './components/SkillLevelList';
import SkillList from './components/SkillList';
import RegionList from './components/RegionList';

import { Container } from './styles';

export default function Filters() {
  return (
    <>
      <Header showBackButton title="Filtros" />

      <Container>
        <StyleList />
        <SkillLevelList />
        <SkillList />
        <RegionList />
      </Container>
    </>
  );
}
