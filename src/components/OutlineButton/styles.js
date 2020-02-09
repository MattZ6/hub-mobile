import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton).attrs(() => ({
  alignSelf: 'center',
  borderRadius: 4,
  backgroundColor: 'rgba(255,255,255,.0)',
}))``;

export const Content = styled.Text`
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.inputPlaceholderColor};
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
`;
