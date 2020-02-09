import styled from 'styled-components/native';
import { darken } from 'polished';

import { colors, fonts } from '~/styles';

export const Container = styled.TouchableOpacity.attrs(() => ({
  elevation: 5,
  shadowOffset: {
    width: 2,
    height: 3,
  },
  shadowOpacity: 0.8,
}))`
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: ${props => (props.round ? 6 : 0)}px;
  background: ${props =>
    props.darken ? darken(0.15, colors.primary) : colors.primary};
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-size: 24px;
  text-align: center;
`;

export const Loader = styled.ActivityIndicator.attrs({ color: colors.white })``;
