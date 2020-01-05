import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Button = styled(RectButton)`
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

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
`;

export const Description = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.clearButtonTextColor};
  font-size: 15px;
  margin-top: 4px;
`;

export const Bold = styled.Text`
  font-family: ${fonts.bold};
`;
