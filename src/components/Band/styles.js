import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton)`
  height: 72px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Thumb = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: ${colors.inputPlaceholderColor};
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  font-family: ${fonts.semiBold};
  color: ${colors.inputPlaceholderColor};
`;
