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

export const AvatarButton = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.havePicture ? 0.9 : 0.6,
}))`
  position: relative;
  align-self: center;
  margin-bottom: 32;
`;

export const IconContainer = styled.View.attrs(() => ({
  elevation: 5,
}))`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 38;
  height: 38;
  border-radius: 19;
  /* border-width: 2px; */
  /* border-color: ${colors.dark};
  border-style: solid; */
  background: #202020;
`;

export const ChangePictureIcon = styled(Icon).attrs(() => ({
  color: colors.inputPlaceholderColor,
  name: 'edit',
  size: 18,
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

export const RoundButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  border-style: solid;
  border-width: 1px;
  border-color: ${props =>
    props.green ? colors.success : colors.skillLevelBackground};
  padding: 7px 20px;
  border-radius: 4px;
  align-self: center;
`;

export const RoundButtonTitle = styled.Text`
  color: ${props =>
    props.green ? colors.success : colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;

/**
 * Skills
 */

export const Skill = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;

export const SkillInfoContainer = styled.View`
  flex: 1;
`;

export const SkillTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
`;

export const SkillDescription = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  font-family: ${fonts.semiBold};
  color: ${colors.inputPlaceholderColor};
  font-size: 14px;
  text-transform: capitalize;
`;

export const SkillLevelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const SkillLevel = styled(Icon).attrs(props => ({
  color: props.gold ? colors.gold : colors.inputPlaceholderColor,
  name: 'star',
  size: 16,
}))``;
