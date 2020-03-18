import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { TOOLBAR_HEIGHT } from '~/components/Header/styles';

import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 32,
  },
}))`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 48px;
  color: ${colors.white};
  padding: 24px 16px;
`;

/**
 * Header
 */

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: ${TOOLBAR_HEIGHT};
  padding: 34px 16px 16px;
  background: ${colors.dark};
  z-index: 10;
`;

export const Shadow = styled(LinearGradient).attrs(() => ({
  colors: [colors.dark, 'transparent'],
}))`
  position: absolute;
  top: ${TOOLBAR_HEIGHT}px;
  left: 0;
  right: 0;
  height: 32px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

/**
 * List header
 */

export const ListHeader = styled.View`
  margin-top: 16px;
  padding: 16px;
`;

export const ListHeaderTitle = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;

export const ListHeaderDescription = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
`;

/**
 * List
 */

export const List = styled(FlatList).attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 16,
  },
}))``;

/**
 * Musician
 */

export const MusicianButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  width: ${props => props?.size + 16};
  padding: 8px 0 8px 16px;
`;

export const MusicianAvatarPlaceholder = styled.View`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size};
  background: #111;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderMoreIcon = styled(Icon).attrs(props => ({
  color: colors.skillLevelBackground,
  size: props.size / 1.5,
}))``;

export const MusicianInfoContainer = styled.View`
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
`;

export const MusicianTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;

export const MusicianDescription = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: #bbbbbb;
  font-family: ${fonts.medium};
  font-size: 12px;
`;

/**
 * Hint
 */

export const HintContainer = styled(Animated.View)`
  margin: 16px;
  padding: 16px;
  border-radius: 6px;
  background: #111111;
`;

export const HintTitle = styled.Text`
  color: #aaa;
  font-family: ${fonts.medium};
  text-align: center;
`;

export const HintButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  align-self: center;
  margin-top: 16px;
  border-width: 1px;
  border-color: ${colors.success};
  border-style: solid;
  border-radius: 4px;
  padding: 8px 16px;
`;

export const HintButtonTitle = styled.Text`
  color: ${colors.success};
  font-family: ${fonts.semiBold};
`;
