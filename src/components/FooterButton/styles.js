import styled from 'styled-components/native';
import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(Animated.View)``;

export const FooterContainer = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.0)', 'rgba(0,0,0,.9)', '#000', 'rgba(0,0,0,1)'],
}))`
  padding: 32px 16px 8px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
