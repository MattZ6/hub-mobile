import React, { useState } from 'react';

import Musician from '~/components/Musician';

import { Container } from './styles';

export default function Main() {
  const [musicians, setMusicians] = useState([
    {
      id: 1,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#UserHash',
      instrument: 'Baterista',
      band: 'Infant Annihilator',
    },
    {
      id: 2,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Username',
      instrument: 'Guitarrista',
      band: 'Machine Head',
    },
    {
      id: 3,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#DeathStroke',
      instrument: 'Baixista',
      band: 'Cannibal Corpse',
    },
    {
      id: 4,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Zorba',
      instrument: 'Vocalista e guitarrista',
    },
    {
      id: 5,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Zasd',
      instrument: 'Guitarrista',
      band: 'Machine Head',
    },
    {
      id: 6,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#MB1',
      instrument: 'Vocalista',
      band: 'MUSE',
    },
    {
      id: 7,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Batman',
      instrument: 'Guitarrista',
      band: 'Justice League',
    },
    {
      id: 8,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Farofa',
      instrument: 'Baterista',
    },
    {
      id: 9,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#UserName',
      instrument: 'Vocalista',
    },
    {
      id: 10,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#XXX',
      instrument: 'Baixista',
    },
    {
      id: 11,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Mano',
      instrument: 'Baixista e baterista',
    },
    {
      id: 12,
      image: `https:i.pravatar.cc/200?u=${Math.random()}`,
      name: '#Ze',
      instrument: 'Baterista, vocalista e baixista',
    },
  ]);

  return (
    <Container
      data={musicians}
      keyExtractor={x => String(x.id)}
      renderItem={({ item }) => <Musician musician={item} />}
    />
  );
}

Main.navigationOptions = {
  headerStyle: {
    backgroundColor: 'transparent',
  },
};
