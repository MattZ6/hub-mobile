import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const LoadingContainer = styled.View.attrs({
  elevantion: 5,
})`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  align-self: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
  shouldRasterizeIOS: true,
  renderToHardwareTextureAndroid: true,
})``;

export const Nickname = styled.Text.attrs({
  numberOfLines: 1,
})`
  text-align: center;
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-size: 24px;
  padding: 0 16px;
  margin-top: 8px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  font-family: ${fonts.medium};
  color: ${colors.white};
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 8px;
`;

export const SignOuButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.semiBold};
  color: ${colors.clearButtonTextColor};
  font-size: 16px;
`;
