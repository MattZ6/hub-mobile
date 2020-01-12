import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton)`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;

export const StyledIcon = styled(Icon).attrs({
  size: 24,
  color: colors.inputPlaceholderColor,
})``;
