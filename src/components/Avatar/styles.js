import styled from 'styled-components/native';
import { darken } from 'polished';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size / 2};
  background: #111;
`;

export const Initials = styled.Text`
  font-size: ${props => props.size / 2};
  font-family: ${fonts.bold};
  color: ${darken(0.1, colors.primaryDisabled)};
`;

export const Picture = styled.Image.attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
`;
