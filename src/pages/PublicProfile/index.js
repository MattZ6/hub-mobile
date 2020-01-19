import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Skill from '~/components/Skill';
import Band from '~/components/Band';

import Location from './components/Location';

import {
  Container,
  Header,
  Content,
  Info,
  ShimmerNick,
  Nick,
  ShimmerName,
  ShimmerLocation,
  Name,
  SectionTitle,
  About,
} from './styles';

const bands = [
  {
    id: 1,
    title: 'Machine Head',
    image: null,
    skills: [
      { id: 1, label: 'Guitarrista' },
      { id: 2, label: 'Vocalista' },
    ],
  },
  {
    id: 2,
    title: "Time Won't Wait",
    image: null,
    skills: [{ id: 1, label: 'Guitarrista' }],
  },
  {
    id: 3,
    title: 'Queens of the Stone Age',
    image: null,
    skills: [{ id: 3, label: 'Baterista' }],
  },
  {
    id: 4,
    title: 'Queens of the Stone Age',
    image: null,
    skills: [{ id: 3, label: 'Baterista' }],
  },
  {
    id: 5,
    title: 'Queens of the Stone Age',
    image: null,
    skills: [{ id: 3, label: 'Baterista' }],
  },
];

export default function PublicProfile({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getMusician() {
      try {
        const id = navigation.getParam('id');

        const { data } = await api.get(`/v1/musicians/${id}`);

        setUser(data);
      } catch (err) {
        console.tron.err(err);
      }
    }
    setTimeout(() => {
      getMusician();
    }, 1000);
  }, [navigation]);

  return (
    <Container>
      <Header />
      <Content scrollEnabled={!!user}>
        <Info>
          <ShimmerNick visible={!!user}>
            <Nick>#{user?.nickname}</Nick>
          </ShimmerNick>

          <ShimmerName visible={!!user}>
            <Name>{user?.name}</Name>
          </ShimmerName>

          <ShimmerLocation visible={!!user}>
            <Location location="Pindamonhangaba, ES - Brasil" />
          </ShimmerLocation>
        </Info>

        <SectionTitle>Sobre</SectionTitle>
        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          dicta corrupti odit eos harum aperiam officiis quidem nulla, earum
          temporibus fuga, quasi, fugit eveniet! Cumque aspernatur reiciendis
          doloribus corporis eos!
        </About>

        <SectionTitle>Habilidades</SectionTitle>

        <Skill title="Guitarrista" />
        <Skill title="Baterista" />
        <Skill title="Batersta" />
        <Skill title="Trompetista" />

        <SectionTitle>Bandas</SectionTitle>

        {bands.map(x => (
          <Band band={x} key={String(x.id)} />
        ))}
      </Content>
    </Container>
  );
}
