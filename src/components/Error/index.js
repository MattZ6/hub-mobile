import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { StyledIcon, Title, Tip } from './styles';

const ANIMATION_DURATION = 500;

export default function Error({
  title,
  tip,
  icon,
  style,
  enabled,
  ...buttonProps
}) {
  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(16);

  function animate() {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }

  useEffect(() => {
    animate();
  }, []);

  return (
    <RectButton
      enabled={enabled}
      {...buttonProps}
      style={{
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Animated.View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
          transform: [{ translateY }],
        }}>
        <StyledIcon name={icon} />

        <Title>{title}</Title>
        <Tip>{tip}</Tip>
      </Animated.View>
    </RectButton>
  );
}

Error.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  tip: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  enabled: PropTypes.bool,
  buttonProps: PropTypes.shape(),
};

Error.defaultProps = {
  icon: 'signal-wifi-off',
  style: null,
  enabled: true,
  buttonProps: null,
};
