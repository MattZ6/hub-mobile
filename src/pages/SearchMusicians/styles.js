import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.inputBackground};
  padding: 32px 16px 8px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  width: 28px;
  height: 28px;
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

export const FilterTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  margin: 16px 16px 0;
`;

export const FilterListStyle = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 10,
  },
}))`
  margin-bottom: 8px;
`;

export const FilterButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  margin-right: 8px;
  background: ${colors.inputBackground};
  padding: 6px 20px;
  border-radius: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.skillLevelBackground};
`;

export const FilterButtonText = styled.Text`
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-family: ${fonts.semiBold};
  font-size: 15px;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 48px;
  margin: 32px 20px;
`;

/**
 * Button
 */

export const ButtonContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.skillLevelBackground};
  padding: 8px 16px;
  border-radius: 4px;
  align-self: center;
`;

export const ButtonTitle = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;
