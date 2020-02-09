import React, { useLayoutEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

import { Container, FooterContainer } from './styles';

export default function FooterButton({ onPress, text }) {
  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(56);

  useLayoutEffect(() => {
    function handleAnimate() {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }

    handleAnimate();
  }, []);

  return (
    <FooterContainer>
      <Container
        style={{
          opacity,
          transform: [{ translateY }],
        }}>
        <Button onPress={onPress}>{text}</Button>
      </Container>
    </FooterContainer>
  );
}

FooterButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
