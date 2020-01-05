import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Avatar,
  Info,
  Title,
  Description,
  Bold,
} from '~/components/Musician/styles';

export default function Musician({ musician }) {
  return (
    <Button>
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
    </Button>
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
