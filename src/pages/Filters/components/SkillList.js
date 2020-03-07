import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSkills, selectSkill } from '~/store/modules/filters/actions';

import api from '~/services/api';

import { throwRequestErrorMessage } from '~/utils/error';

import Loading from '~/components/Loading';
import Refresher from '~/components/Refresher';
import ErrorContainer from '~/components/ErrorContainer';

import Skill from './Skill';

import { ContentContainer, Title } from '../styles';

export default function SkillList() {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.filters.skills);

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleSelect(id) {
    dispatch(selectSkill(id));
  }

  async function getSkills(refresh = false) {
    setError(false);

    if (skills.length > 0 && !refresh) {
      return;
    }

    setLoading(!refresh);
    setRefreshing(refresh);

    try {
      const { data } = await api.get('/v1/instruments');
      dispatch(setSkills(data));
    } catch (err) {
      if (skills.length > 0) {
        throwRequestErrorMessage(err);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  React.useEffect(() => {
    getSkills();
  }, []);

  return (
    <ContentContainer
      refreshControl={
        <Refresher onRefresh={() => getSkills(true)} refreshing={refreshing} />
      }>
      {!error && loading && <Loading style={{ margin: 16 }} />}

      {!error && !loading && (
        <>
          <Title>Toque para selecionar uma habilidade</Title>

          {skills.map(skill => (
            <Skill
              key={String(skill.id)}
              skill={skill}
              onPress={() => handleSelect(skill.id)}
            />
          ))}
        </>
      )}

      {error && !loading && <ErrorContainer onPress={() => getSkills()} />}
    </ContentContainer>
  );
}
