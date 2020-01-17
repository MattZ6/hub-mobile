import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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

export default function Main({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <Container>
        <Title>Home</Title>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
          style={{
            paddingVertical: 4,
          }}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <RectButton
              style={{
                width: 140,
                marginRight: 8,
              }}>
              <View
                style={{
                  width: 128,
                  height: 128,
                  borderRadius: 8,
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
            </RectButton>
          )}
        />
      </Container>
    </>
  );
}

Main.navigationOptions = {
  headerShown: false,
};
