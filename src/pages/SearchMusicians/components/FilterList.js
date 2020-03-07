import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import FilterTypes from '~/pages/Filters/types';

import Filter from './Filter';

import { FilterTitle, FilterListStyle } from '../styles';

function FilterList({ navigation }) {
  const [citySelected, setCitySelected] = React.useState(false);
  const [skillSelected, setSkillSelected] = React.useState(false);
  const [skillLevelSelected, setSkillLevelSelected] = React.useState(false);
  const [musicStyleSelected, setMusicStyleSelected] = React.useState(false);

  const regions = useSelector(state => state.filters.regions);
  const skills = useSelector(state => state.filters.skills);
  const skillLevels = useSelector(state => state.filters.skillLevels);
  const styles = useSelector(state => state.filters.styles);

  function handleNavigate(type) {
    navigation.navigate('Filters', { type });
  }

  React.useEffect(() => {
    const isSelected = regions.some(x => x.selected);

    setCitySelected(isSelected);
  }, [regions]);

  React.useEffect(() => {
    const isSelected = skills.some(x => x.selected);

    setSkillSelected(isSelected);
  }, [skills]);

  React.useEffect(() => {
    const isSelected = skillLevels.some(x => x.selected);

    setSkillLevelSelected(isSelected);
  }, [skillLevels]);

  React.useEffect(() => {
    const isSelected = styles.some(x => x.selected);

    setMusicStyleSelected(isSelected);
  }, [styles]);

  return (
    <>
      <FilterTitle>Filtrar por</FilterTitle>
      <FilterListStyle>
        <Filter
          onPress={() => handleNavigate(FilterTypes.REGIONS)}
          title="Cidades"
          selected={citySelected}
        />
        <Filter
          onPress={() => handleNavigate(FilterTypes.SKILLS)}
          title="Habilidades"
          selected={skillSelected}
        />
        <Filter
          onPress={() => handleNavigate(FilterTypes.SKILL_LEVELS)}
          title="Níveis de habilidade"
          selected={skillLevelSelected}
        />
        <Filter
          onPress={() => handleNavigate(FilterTypes.STYLES)}
          title="Gostos musicais"
          selected={musicStyleSelected}
        />
      </FilterListStyle>
    </>
  );
}

export default withNavigation(FilterList);

FilterList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
