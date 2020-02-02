import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  Button,
  Avatar,
  Info,
  Title,
  Description,
} from '~/components/Musician/styles';

function Musician({ musician, navigation }) {
  function handleNavigate() {
    navigation.navigate('PublicProfile', { id: musician.id });
  }

  return (
    <Button onPress={handleNavigate}>
      <Avatar source={{ uri: `https:i.pravatar.cc/200?u=${musician.id}` }} />

      <Info>
        <Title>{musician.name}</Title>
        <Description>{musician.skills}</Description>
      </Info>
    </Button>
  );
}

Musician.propTypes = {
  musician: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    skills: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Musician);
