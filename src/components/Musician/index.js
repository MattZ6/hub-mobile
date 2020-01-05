import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Avatar,
  Info,
  Title,
  Description,
  Bold,
} from '~/components/Musician/styles';

export default function Musician({ musician }) {
  return (
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
  );
}

Musician.propTypes = {
  musician: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    instrument: PropTypes.string,
    band: PropTypes.string,
  }).isRequired,
};
