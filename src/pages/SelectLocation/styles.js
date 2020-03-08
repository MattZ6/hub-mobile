import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.inputBackground};
  padding: 32px 16px 8px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  width: 28;
  height: 28;
  align-items: center;
  justify-content: center;
`;

export const HeaderIcon = styled(Icon).attrs(() => ({
  size: 24,
  color: colors.inputPlaceholderColor,
}))`
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const Search = styled.TextInput.attrs(() => ({
  placeholderTextColor: colors.inputPlaceholderColor,
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'off',
  contextMenuHidden: true,
  selectionColor: colors.black,
  color: colors.inputTextColor,
  returnKeyType: 'search',
}))`
  flex: 1;
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.white};
  padding: 8px;
  margin: 0 8px;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  justify-content: center;
`;

export const CityButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  height: 56px;
  padding: 8px 16px;
  border-radius: 0;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const Pin = styled(Icon).attrs(props => ({
  size: 16,
  name: 'room',
  color: props.check ? colors.success : colors.inputPlaceholderColor,
}))`
  margin-right: 16px;
`;

export const CityText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
`;

export const CityBoldText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 16px;
`;

export const Check = styled(Icon).attrs(() => ({
  size: 24,
  name: 'check',
  color: colors.success,
}))`
  margin-left: 16px;
`;
