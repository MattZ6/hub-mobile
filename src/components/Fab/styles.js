import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';

import { colors } from '~/styles';

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 16;
  right: 16;
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  elevation: 5,
}))`
  align-items: center;
  justify-content: center;
  width: 56;
  height: 56;
  border-radius: 28;
  background: ${props => props.backgroundColor || darken(0.05, colors.success)};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const ButtonIcon = styled(Icon).attrs(props => ({
  size: 32,
  color: props.iconColor || colors.white,
}))``;
