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

function InformationContainer({ icon, title, description, animate, ...rest }) {
  const opacityValue = new Animated.Value(animate ? 0 : 1);
  const translateValue = new Animated.Value(animate ? 16 : 0);

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

    // if(animate){
    handleAnimate();
    // }
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
  animate: PropTypes.bool,
};

InformationContainer.defaultProps = {
  icon: null,
  title: 'Título',
  description: null,
  animate: true,
};

export default React.memo(InformationContainer);
