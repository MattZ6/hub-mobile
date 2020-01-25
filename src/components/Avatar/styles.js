import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Picture = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background: ${colors.inputBackground};
`;
