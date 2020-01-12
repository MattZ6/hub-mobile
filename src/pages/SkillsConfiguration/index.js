import React, { useState, useMemo } from 'react';

import SkillSelect from '~/components/SkillSelect';
import Button from '~/components/Button';

import { Container, List, Header } from './styles';

const data = [
  {
    id: 1,
    name: 'Guitarra',
    label: 'guitarrista',
    checked: false,
  },
  {
    id: 2,
    name: 'Contrabaixo',
    label: 'baixista',
    checked: false,
  },
  {
    id: 3,
    name: 'Bateria',
    label: 'baterista',
    checked: false,
  },
  {
    id: 4,
    name: 'Vocal',
    label: 'vocalista',
    checked: false,
  },
  {
    id: 5,
    name: 'Teclado',
    label: 'tecladista',
    checked: false,
  },
  {
    id: 6,
    name: 'Piano',
    label: 'pianista',
    checked: false,
  },
  {
    id: 7,
    name: 'Trompete',
    label: 'trompetista',
    checked: false,
  },
  {
    id: 8,
    name: 'Percussão',
    label: 'percussionista',
    checked: false,
  },
  {
    id: 9,
    name: 'Tuba',
    label: 'tubista',
    checked: false,
  },
  {
    id: 10,
    name: 'Trombone',
    label: 'trombonista',
    checked: false,
  },
];

export default function SkillsConfiguration() {
  const [skills, setSkills] = useState(data);
  const [loading, setLoading] = useState(false);

  const valid = useMemo(() => {
    return skills.some(x => x.checked);
  }, [skills]);

  function toggleCheckSkill(id) {
    const newSkills = skills.map(x => {
      if (x.id === id) {
        x.checked = !x.checked;
      }

      return x;
    });

    setSkills([...newSkills]);
  }

  function handleSubmit() {
    setLoading(true);

    const instruments = skills
      .filter(x => x.checked)
      .map(x => ({ skillLevel: 2, instrumentId: x.id }));

    const data = { instruments };

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Container>
      <List
        ListHeaderComponent={
          <Header>
            Informe quais são suas habilidades para prosseguir com o cadastro
          </Header>
        }
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SkillSelect
            enabled={!loading}
            key={String(item.id)}
            check={() => toggleCheckSkill(item.id)}
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
