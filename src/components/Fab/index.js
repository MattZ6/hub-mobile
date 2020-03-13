import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Button, ButtonIcon } from './styles';

function Fab({ icon, ...rest }) {
  const scale = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  function scaleFab() {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        delay: 200,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        delay: 200,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }

  React.useEffect(() => {
    scaleFab();
  }, []);

  return (
    <Container style={{ opacity, transform: [{ scale }] }}>
      <Button {...rest}>
        <ButtonIcon name={icon} />
      </Button>
    </Container>
  );
}

Fab.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default React.memo(Fab);
