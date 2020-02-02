import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Description = styled.Text`
  padding: 16px 32px 32px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
  text-align: center;
`;

export const FooterContainer = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.0)', 'rgba(0,0,0,.9)', '#000', 'rgba(0,0,0,1)'],
}))`
  padding: 32px 16px 8px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
