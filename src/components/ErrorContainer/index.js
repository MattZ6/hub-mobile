import React, { useLayoutEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Button, StyledIcon, Title, Description } from './styles';

const ANIMATION_DURATION = 500;

export default function ErrorContainer({
  title,
  tip,
  icon,
  style,
  enabled,
  ...rest
}) {
  const opacityValue = new Animated.Value(0);
  const translateValue = new Animated.Value(16);

  useLayoutEffect(() => {
    function handleAnimate() {
      Animated.parallel([
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(translateValue, {
          toValue: 0,
          duration: ANIMATION_DURATION * 0.8,
          useNativeDriver: true,
        }),
      ]).start();
    }

    handleAnimate();
  }, []);

  return (
    <Container
      style={{
        opacity: opacityValue,
        transform: [{ translateY: translateValue }],
      }}>
      <Button style={style} disabled={!enabled} {...rest}>
        <StyledIcon name={icon} />

        <Title>{title}</Title>
        <Description>{tip}</Description>
      </Button>
    </Container>
  );
}

ErrorContainer.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  tip: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  enabled: PropTypes.bool,
};

ErrorContainer.defaultProps = {
  icon: 'cloud-off',
  title: 'Verifique sua conexão com a internet',
  tip: 'Toque para tentar novamente',
  style: null,
  enabled: true,
};
