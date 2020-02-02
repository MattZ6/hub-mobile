import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0;
  background: rgba(0, 0, 0, 0);
  border-radius: 0;
  height: 48px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 16px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;

export const Left = styled(Icon).attrs(props => ({
  size: 24,
  color: props.color || colors.inputPlaceholderColor,
}))`
  margin-right: 16px;
`;

export const Right = styled(Icon).attrs({
  size: 24,
  color: colors.inputPlaceholderColor,
})`
  margin-left: 16px;
`;
