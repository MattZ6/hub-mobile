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
  margin: 16px 20px 0;
`;

export const FilterListStyle = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 10,
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

// export const TopContainer = styled.View`
//   padding-top: 100px;
// `;

// export const Container = styled.ScrollView.attrs({
//   keyboardShouldPersistTaps: 'handled',
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: {
//     paddingTop: 100,
//     // paddingHorizontal: 20,
//     // paddingBottom: 100,
//   },
// })`
//   flex: 1;
// `;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 48px;
  margin: 32px 20px;
`;

// export const SearchButton = styled.TouchableOpacity.attrs(() => ({
//   activeOpacity: 0.6,
// }))`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;

//   margin: 16px 20px 0;
//   padding: 8px 16px;
//   height: 48px;
//   border-radius: 8px;
//   background: ${colors.rippleColor};
// `;

// export const SearchButtonText = styled.Text`
//   color: ${colors.inputPlaceholderColor};
//   font-family: ${fonts.medium};
//   font-size: 16px;
// `;

//----------------------------------------

// export const Container = styled.View`
//   flex: 1;
// `;

// export const Header = styled.View`
//   flex-direction: row;
//   align-items: center;
//   background: #111111;
//   padding: 32px 16px 8px;
// `;

// export const HeaderButton = styled(BorderlessButton)`
//   width: 28;
//   height: 28;
//   align-items: center;
//   justify-content: center;
// `;

// export const HeaderIcon = styled(Icon).attrs(() => ({
//   size: 24,
//   color: colors.inputPlaceholderColor,
// }))``;

// export const ClearIcon = styled(Icon).attrs(() => ({
//   size: 24,
//   name: 'clear',
//   color: colors.white,
// }))``;

// export const Search = styled.TextInput.attrs(() => ({
//   placeholderTextColor: colors.inputPlaceholderColor,
//   autoCapitalize: 'none',
//   autoCorrect: false,
//   autoCompleteType: 'off',
//   contextMenuHidden: true,
//   selectionColor: colors.black,
//   color: colors.inputTextColor,
//   returnKeyType: 'search',
// }))`
//   flex: 1;
//   font-family: ${fonts.medium};
//   font-size: 18px;
//   color: ${colors.white};
//   padding: 8px;
//   margin: 0 8px;
// `;

// export const List = styled(FlatList)`
//   flex: 1;
// `;

// export const ListHeader = styled.Text`
//   font-family: ${fonts.semiBold};
//   font-size: 48px;
//   color: ${colors.white};
//   margin: 16px 16px 32px;
// `;

/**
 * For loading
 */

// export const ShimmerContainer = styled.View`
//   flex-direction: row;
//   align-items: center;
//   padding: 8px 20px;
//   height: 74px;
//   width: 100%;
// `;

// export const ShimmerContainerContent = styled.View`
//   flex: 1;
//   margin-left: 16px;
//   padding-right: 20px;
// `;

// export const Loading = styled.ActivityIndicator.attrs(() => ({
//   color: colors.success,
//   elevation: 5,
// }))`
//   background: ${colors.skillLevelBackground};
//   border-radius: 100px;
//   padding: 8px;
//   margin: 16px;
//   align-self: center;
// `;
