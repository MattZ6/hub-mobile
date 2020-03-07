import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  height: 74px;
  width: 100%;
  border-radius: 0;
`;

export const Avatar = styled.Image.attrs({
  fadeDuration: 500,
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: ${colors.inputBackground};
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 16px;
  padding-right: 20px;
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
