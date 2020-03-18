import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Avatar from '~/components/Avatar';

import {
  MusicianButton,
  MusicianInfoContainer,
  MusicianTitle,
  MusicianDescription,
} from '../styles';

function Musician({ navigation, musician, showTitle, showDescription, size }) {
  function handleNavigate() {
    navigation.navigate('PublicProfile', { id: musician.id });
  }

  return (
    <MusicianButton size={size} onPress={handleNavigate}>
      <Avatar size={size} name={musician.name} url={musician.avatar_url} />

      <MusicianInfoContainer>
        {showDescription && (
          <MusicianDescription>#{musician.nickname}</MusicianDescription>
        )}
        {showTitle && <MusicianTitle>{musician.name}</MusicianTitle>}
      </MusicianInfoContainer>
    </MusicianButton>
  );
}

Musician.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  musician: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    nickname: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  size: PropTypes.number,
  showTitle: PropTypes.bool,
  showDescription: PropTypes.bool,
};

Musician.defaultProps = {
  size: 80,
  showTitle: true,
  showDescription: true,
};

export default withNavigation(Musician);
