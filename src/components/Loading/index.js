import React, { useEffect } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

export default function Loading({ size, style, ...rest }) {
  const opacity = new Animated.Value(0);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <Animated.View style={{ opacity }}>
      <ActivityIndicator
        style={[{ alignSelf: 'center' }, style]}
        renderToHardwareTextureAndroid
        size={size}
        color={colors.success}
        {...rest}
      />
    </Animated.View>
  );
}

Loading.propTypes = {
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Loading.defaultProps = {
  size: 32,
  style: null,
};
