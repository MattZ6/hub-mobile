import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton).attrs({
  borderRadius: 8,
})`
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${colors.clearButtonTextColor};
  text-align: center;
  font-family: ${fonts.semiBold};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
