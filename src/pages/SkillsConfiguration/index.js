import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import { updateUserFirsSkillConfiguration } from '~/store/modules/user/actions';

import SkillSelect from '~/components/SkillSelect';
import Button from '~/components/Button';

import { Container, List, Header } from './styles';

export default function SkillsConfiguration() {
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const valid = useMemo(() => {
    return skills.some(x => x.checked);
  }, [skills]);

  useEffect(() => {
    async function getInstruments() {
      try {
        const { data } = await api.get('/v1/instruments');

        setSkills(data.map(x => ({ ...x, checked: false })));
      } catch (err) {
        // setError(true);
      }
    }

    getInstruments();
  }, []);

  function handleToggleSkill(id) {
    const newSkills = skills.map(x => {
      if (x.id === id) {
        x.checked = !x.checked;
      }

      return x;
    });

    setSkills([...newSkills]);
  }

  async function handleSubmit() {
    setLoading(true);

    try {
      const instruments = skills
        .filter(x => x.checked)
        .map(x => ({ skillLevel: 2, instrumentId: x.id }));

      const data = { instruments };

      await api.post('/v1/skills', data);

      dispatch(updateUserFirsSkillConfiguration(true));
    } catch (error) {
      throwRequestErrorMessage(error);

      setLoading(false);
    }
  }

  return (
    <Container>
      <List
        ListHeaderComponent={
          <Header>
            Informe quais são suas habilidades para prosseguir com o cadastro
          </Header>
        }
        data={skills}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SkillSelect
            enabled={!loading}
            key={String(item.id)}
            check={() => handleToggleSkill(item.id)}
            skill={item}
          />
        )}
      />
      <Button
        enabled={valid}
        valid={valid}
        round={false}
        loading={loading}
        onPress={handleSubmit}>
        Finalizar
      </Button>
    </Container>
  );
}

SkillsConfiguration.navigationOptions = {
  title: 'Habilidades',
};
