import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Musician from '~/components/Musician';

import { Container, List } from '~/pages/Main/styles';

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
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ padding: 20, color: '#fff', fontSize: 40 }}>Perfil</Text>
      </TouchableOpacity>

      <List
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 48,
              color: '#fff',
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            Buscar
          </Text>
        }
        data={musicians}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => <Musician musician={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

Main.navigationOptions = {
  headerStyle: {
    backgroundColor: 'transparent',
  },
};
