import React, { useLayoutEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  IconContainer,
  StyledIcon,
  Title,
  Description,
} from './styles';

function InformationContainer({ icon, title, description, ...rest }) {
  const opacityValue = new Animated.Value(0);
  const translateValue = new Animated.Value(16);

  useLayoutEffect(() => {
    function handleAnimate() {
      Animated.parallel([
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateValue, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    }

    handleAnimate();
  }, []);

  return (
    <Container
      {...rest}
      style={{
        opacity: opacityValue,
        transform: [{ translateY: translateValue }],
      }}>
      {icon && (
        <IconContainer>
          <StyledIcon name={icon} />
        </IconContainer>
      )}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}

InformationContainer.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

InformationContainer.defaultProps = {
  icon: null,
  title: 'Título',
  description: null,
};

export default React.memo(InformationContainer);
