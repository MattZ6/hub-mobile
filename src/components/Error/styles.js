import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const StyledIcon = styled(Icon).attrs(() => ({
  size: 120,
  color: colors.inputPlaceholderColor,
}))``;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  margin-top: 8px;
`;

export const Tip = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  margin-top: 8px;
`;
