import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
