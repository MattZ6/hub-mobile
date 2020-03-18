import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  MusicianButton,
  MusicianAvatarPlaceholder,
  PlaceholderMoreIcon,
} from '../styles';

function More({ size, navigation }) {
  function handleNavigate() {
    navigation.navigate('SearchMusicians');
  }

  return (
    <MusicianButton size={size} onPress={handleNavigate}>
      <MusicianAvatarPlaceholder size={size}>
        <PlaceholderMoreIcon size={size} name="search" />
      </MusicianAvatarPlaceholder>
    </MusicianButton>
  );
}

More.propTypes = {
  size: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(React.memo(More));
