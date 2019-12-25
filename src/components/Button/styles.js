import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton).attrs(() => ({
  activeOpacity: 0.5,
  elevation: 5,
  shadowOffset: {
    width: 2,
    height: 3,
  },
  shadowOpacity: 0.8,
}))`
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${colors.primary};
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-size: 24px;
  text-align: center;
`;

export const Loader = styled.ActivityIndicator.attrs({ color: colors.white })``;
