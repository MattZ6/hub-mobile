import React from 'react';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';
import {
  Button,
  Avatar,
  Info,
  Title,
  Description,
  Bold,
} from '~/components/Musician/styles';

function Musician({ musician, navigation }) {
  function handleNavigate() {
    navigation.navigate('PublicProfile', { id: musician.id });
  }

  return (
    <Button onPress={handleNavigate}>
      <Avatar source={{ uri: `https:i.pravatar.cc/200?u=${musician.id}` }} />

      <Info>
        <Title>#{musician.nickname}</Title>
        <Description numberOfLines={1}>
          {musician.description}
          {/* {musician.instrument}
          {musician.band && (
            <Description>
              {' '}
              em <Bold>{musician.band}</Bold>
            </Description>
          )} */}
        </Description>
      </Info>
    </Button>
  );
}

Musician.propTypes = {
  musician: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default withNavigation(Musician);
