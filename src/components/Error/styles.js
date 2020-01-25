import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const StyledIcon = styled(Icon).attrs(() => ({
  size: 56,
  color: colors.inputPlaceholderColor,
}))``;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  margin-top: 4px;
`;

export const Tip = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  margin-top: 4px;
`;
