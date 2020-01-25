import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { FlatList, BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background: #111111;
  padding: 32px 16px 8px;
`;

export const HeaderButton = styled(BorderlessButton)`
  width: 28;
  height: 28;
  align-items: center;
  justify-content: center;
`;

export const HeaderIcon = styled(Icon).attrs(() => ({
  size: 24,
  color: colors.inputPlaceholderColor,
}))``;

export const ClearIcon = styled(Icon).attrs(() => ({
  size: 24,
  name: 'clear',
  color: colors.white,
}))``;

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
  font-size: 18px;
  color: ${colors.white};
  padding: 8px;
  margin: 0 8px;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const ListHeader = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 48px;
  color: ${colors.white};
  margin: 16px 16px 32px;
`;

/**
 * For loading
 */

export const ShimmerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  height: 74px;
  width: 100%;
`;

export const ShimmerContainerContent = styled.View`
  flex: 1;
  margin-left: 16px;
  padding-right: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: colors.success,
  elevation: 5,
}))`
  background: ${colors.skillLevelBackground};
  border-radius: 100px;
  padding: 8px;
  margin: 16px;
  align-self: center;
`;
