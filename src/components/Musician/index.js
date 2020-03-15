import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Avatar from '~/components/Avatar';

import {
  Button,
  // Avatar,
  Info,
  Nick,
  Title,
  Description,
} from '~/components/Musician/styles';

function Musician({ musician, navigation }) {
  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(8);

  function handleNavigate() {
    navigation.navigate('PublicProfile', { id: musician.id });
  }

  React.useEffect(() => {
    function animateMusician() {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }

    animateMusician();
  }, []);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      <Button onPress={handleNavigate}>
        <Avatar name={musician.name} url={musician.avatar_url} size={56} />

        <Info>
          <Nick>#{musician.nickname}</Nick>
          <Title>{musician.name}</Title>
          {musician.skills && <Description>{musician.skills}</Description>}
        </Info>
      </Button>
    </Animated.View>
  );
}

Musician.propTypes = {
  musician: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    name: PropTypes.string,
    skills: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(React.memo(Musician));
