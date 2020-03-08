import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import ItemButton from '~/components/ItemButton';
import ButtonClear from '~/components/ButtonClear';

import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 16,
  },
})`
  flex: 1;
  z-index: 1;
`;

export const AvatarButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  position: relative;
  align-self: center;
  margin-bottom: 32;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32;
  height: 32;
  border-radius: 16;
  border-color: ${colors.dark};
  border-style: solid;
  background: #3f3f3f;
`;

export const ChangePictureIcon = styled(Icon).attrs(() => ({
  color: colors.inputPlaceholderColor,
  name: 'edit',
  size: 20,
}))``;

export const Nickname = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  text-align: center;
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-size: 24px;
  padding: 0 16px;
  margin: 8px 0;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  font-size: 18px;
  padding: 0 16px;
`;

export const Item = styled(ItemButton)`
  margin-bottom: 8px;
`;

export const PinItem = styled(ItemButton).attrs(() => ({
  leftIconColor: colors.pin,
}))``;

export const Hint = styled.Text`
  font-family: ${fonts.medium};
  font-size: 13px;
  color: ${colors.inputPlaceholderColor};
  padding: 0 16px 8px;
`;

export const SignOutButton = styled(ButtonClear)`
  margin: 32px 0 0;
  height: 56px;
`;

/**
 * Styles
 */

export const StyleList = styled(FlatList).attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 8,
    paddingRight: 16,
  },
}))``;

export const Style = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.skillLevelBackground};
  padding: 8px 22px;
  border-radius: 32px;
  margin-left: 8px;
`;

export const StyleTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;

/**
 * Try again
 */

export const TryAgainButton = styled.TouchableOpacity.attrs(() => ({
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

export const TryAgainButtonTitle = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;
