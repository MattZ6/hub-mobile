import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  height: 74px;
  width: 100%;
  border-radius: 0;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Nick = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.white};
  font-size: 12px;
  font-family: ${fonts.semiBold};
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.bold};
`;

export const Description = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.clearButtonTextColor};
  font-size: 14px;
  font-family: ${fonts.semiBold};
`;

export const Bold = styled.Text`
  font-family: ${fonts.bold};
`;
