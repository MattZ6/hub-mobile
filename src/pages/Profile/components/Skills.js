import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { setUserSkills } from '~/store/modules/userSkills/actions';

import SectionTitle from '~/components/SectionTitle';
import ButtonClear from '~/components/ButtonClear';
import Loading from '~/components/Loading';

import {
  Hint,
  RoundButton,
  RoundButtonTitle,
  Skill,
  SkillInfoContainer,
  SkillTitle,
  SkillDescription,
  SkillLevelContainer,
  SkillLevel,
} from '../styles';

function Skills({ navigation }) {
  const dispatch = useDispatch();

  const skills = useSelector(state => state.userSkills.userSkills);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleNavigate() {
    navigation.navigate('UserSkills');
  }

  async function getSkills() {
    if (skills) {
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const { data } = await api.get('/v1/skills');

      dispatch(setUserSkills(data));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <SectionTitle style={{ margin: 16 }}>Minhas habilidades</SectionTitle>

      {!error && !loading && skills && (
        <>
          {skills.length === 0 && (
            <>
              <Hint>
                Adicionar uma habilidade aumenta sua chance de ser contrado
              </Hint>

              <RoundButton
                onPress={handleNavigate}
                green
                style={{ marginTop: 8 }}>
                <RoundButtonTitle green>Adicionar</RoundButtonTitle>
              </RoundButton>
            </>
          )}

          {skills.length > 0 && (
            <>
              {skills.map(skill => (
                <Skill key={String(skill.id)}>
                  <SkillInfoContainer>
                    <SkillTitle>{skill.instrument_label}</SkillTitle>
                    <SkillDescription>
                      {skill.skill_level_label}
                    </SkillDescription>
                  </SkillInfoContainer>

                  <SkillLevelContainer>
                    <SkillLevel gold={skill.skill_level >= 1} />
                    <SkillLevel gold={skill.skill_level >= 2} />
                    <SkillLevel gold={skill.skill_level >= 3} />
                  </SkillLevelContainer>
                </Skill>
              ))}

              <ButtonClear
                style={{ marginTop: 8 }}
                onPress={handleNavigate}
                textProps={{ style: { color: 'white' } }}>
                Gerenciar
              </ButtonClear>
            </>
          )}
        </>
      )}

      {!error && loading && <Loading style={{ marginTop: 2 }} />}

      {!loading && error && (
        <RoundButton onPress={getSkills}>
          <RoundButtonTitle>Tentar novamente</RoundButtonTitle>
        </RoundButton>
      )}
    </>
  );
}

Skills.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Skills);
