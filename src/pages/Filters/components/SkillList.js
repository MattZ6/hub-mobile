import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSkills, selectSkill } from '~/store/modules/filters/actions';

import api from '~/services/api';

import Loading from '~/components/Loading';
import Skill from './Skill';

import { ContentContainer, Title } from '../styles';

export default function SkillList() {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.filters.skills);

  const [loading, setLoading] = React.useState(false);

  function handleSelect(id) {
    dispatch(selectSkill(id));
  }

  React.useEffect(() => {
    async function getSkills() {
      if (skills.length === 0) {
        setLoading(true);

        try {
          const { data } = await api.get('/v1/instruments');
          dispatch(setSkills(data));
        } catch (err) {
          console.tron.error(err);
        } finally {
          setLoading(false);
        }
      }
    }

    getSkills();
  }, []);

  return (
    <ContentContainer>
      <Title>Habilidades</Title>

      <>
        {loading ? (
          <Loading style={{ margin: 16 }} />
        ) : (
          skills.map(skill => (
            <Skill
              key={String(skill.id)}
              skill={skill}
              onPress={() => handleSelect(skill.id)}
            />
          ))
        )}
      </>
    </ContentContainer>
  );
}
