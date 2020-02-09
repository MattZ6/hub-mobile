import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Container = styled.TouchableOpacity.attrs(props => ({
  borderRadius: props.round ? 6 : 0,
}))`
  height: 44px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${colors.clearButtonTextColor};
  text-align: center;
  font-family: ${fonts.semiBold};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
