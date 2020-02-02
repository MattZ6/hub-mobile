import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled(BaseButton).attrs(props => ({
  borderRadius: props.round ? 6 : 0,
}))`
  height: 44px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.01);
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${colors.clearButtonTextColor};
  text-align: center;
  font-family: ${fonts.semiBold};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
