import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
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
  color: ${props => props.color || colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;

export const ErrorMessage = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.danger};
  font-family: ${fonts.medium};
  font-size: 14px;
`;

export const Left = styled(Icon).attrs(props => ({
  size: 24,
  color: props.invalid
    ? colors.danger
    : props.color || colors.inputPlaceholderColor,
}))`
  margin-right: 16px;
`;

export const Right = styled(Icon).attrs({
  size: 24,
  color: colors.inputPlaceholderColor,
})`
  margin-left: 16px;
`;
