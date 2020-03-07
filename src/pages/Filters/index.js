import React from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  removeRegionsSelection,
  removeSkillsSelection,
  removeSkillLevelsSelection,
  removeStylesSelection,
} from '~/store/modules/filters/actions';

import FilterType from '~/pages/Filters/types';

import Header from '~/components/Header';

import StyleList from './components/StyleList';
import SkillLevelList from './components/SkillLevelList';
import SkillList from './components/SkillList';
import RegionList from './components/RegionList';

import { Container } from './styles';

export default function Filters({ navigation }) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const [title, setTitle] = React.useState('Filtros');
  const [type] = React.useState(`${navigation.getParam('type')}`);
  const [showClear, setShowClear] = React.useState(false);

  function clearSelection() {
    if (type === FilterType.REGIONS) {
      dispatch(removeRegionsSelection());
    }

    if (type === FilterType.SKILLS) {
      dispatch(removeSkillsSelection());
    }

    if (type === FilterType.SKILL_LEVELS) {
      dispatch(removeSkillLevelsSelection());
    }

    if (type === FilterType.STYLES) {
      dispatch(removeStylesSelection());
    }
  }

  function showToast() {
    ToastAndroid.show('Remover seleção', ToastAndroid.SHORT);
  }

  React.useEffect(() => {
    if (type === FilterType.REGIONS) {
      setTitle('Cidades');
    }

    if (type === FilterType.SKILLS) {
      setTitle('Habilidades');
    }

    if (type === FilterType.SKILL_LEVELS) {
      setTitle('Níveis de habilidade');
    }

    if (type === FilterType.STYLES) {
      setTitle('Gostos musicais');
    }
  }, [type]);

  React.useEffect(() => {
    if (type === FilterType.REGIONS) {
      const someSelected = filters.regions.some(x => x.selected);
      setShowClear(someSelected);
    }

    if (type === FilterType.SKILLS) {
      const someSelected = filters.skills.some(x => x.selected);
      setShowClear(someSelected);
    }

    if (type === FilterType.SKILL_LEVELS) {
      const someSelected = filters.skillLevels.some(x => x.selected);
      setShowClear(someSelected);
    }

    if (type === FilterType.STYLES) {
      const someSelected = filters.styles.some(x => x.selected);
      setShowClear(someSelected);
    }
  }, [filters]);

  return (
    <>
      <Header
        showBackButton
        title={title}
        showsRightButton={showClear}
        // remove-circle-outline
        rightIcon="close"
        rightButtonProps={{
          onPress: clearSelection,
          onLongPress: showToast,
        }}
      />

      <Container>
        {type === FilterType.REGIONS && <RegionList />}
        {type === FilterType.SKILLS && <SkillList />}
        {type === FilterType.SKILL_LEVELS && <SkillLevelList />}
        {type === FilterType.STYLES && <StyleList />}
      </Container>
    </>
  );
}

Filters.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
