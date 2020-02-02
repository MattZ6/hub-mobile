import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

import { Container, Title } from '~/pages/Main/styles';

import Header from './components/Header';

const data = [
  {
    id: Math.random(),
    name: 'Machine Head',
  },
  {
    id: Math.random(),
    name: 'MUSE',
  },
  {
    id: Math.random(),
    name: "Time Won't Wait",
  },
  {
    id: Math.random(),
    name: 'Machine Head',
  },
  {
    id: Math.random(),
    name: 'Machine Head',
  },
];

const musicians = [
  {
    id: Math.random(),
    name: '@mattz7',
  },
  {
    id: Math.random(),
    name: '@CptDeadPool',
  },
  {
    id: Math.random(),
    name: '@Zorba',
  },
  {
    id: Math.random(),
    name: '@SladeWilson',
  },
  {
    id: Math.random(),
    name: '@Batata',
  },
  {
    id: Math.random(),
    name: '@NomeGrandeDemaisParaExibirCorretamente',
  },
];

export default function Main({ navigation }) {
  return (
    <>
      <Header />
      <Container>
        {/* <Title>Home</Title> */}

        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Text style={{ color: '#fff' }}>Músicos próximos a você</Text>
          <Text style={{ color: '#fff' }}>Guarapuava, PR</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          style={{
            paddingVertical: 4,
          }}
          data={musicians}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <BaseButton
              style={{
                width: 140,
                padding: 8,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  backgroundColor: 'rgba(255,255,255,.05)',
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: '#fff',
                  marginTop: 8,
                  marginLeft: 4,
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
            </BaseButton>
          )}
        />

        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Text style={{ color: '#fff' }}>Heavy Metal?</Text>
          <Text style={{ color: '#fff' }}>
            Músicos que também gostam de Heavy Metal
          </Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          style={{
            paddingVertical: 4,
          }}
          data={musicians}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <BaseButton
              style={{
                width: 100,
                padding: 8,
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: 'rgba(255,255,255,.05)',
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: '#fff',
                  marginTop: 8,
                  marginLeft: 4,
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
            </BaseButton>
          )}
        />
      </Container>
    </>
  );
}

Main.navigationOptions = {
  headerShown: false,
};
