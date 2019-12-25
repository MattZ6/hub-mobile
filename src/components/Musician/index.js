import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Avatar, Info, Title, Description, Bold } from './styles';

export default function Musician({ musician }) {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <Container>
        <Avatar source={{ uri: musician.image }} />

        <Info>
          <Title>{musician.name}</Title>
          <Description numberOfLines={1}>
            {musician.instrument}
            {musician.band && (
              <Description>
                {' '}
                em <Bold>{musician.band}</Bold>
              </Description>
            )}
          </Description>
        </Info>
      </Container>
    </TouchableOpacity>
  );
}
