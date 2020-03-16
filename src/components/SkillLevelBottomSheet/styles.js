import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Description = styled.Text`
  padding: 16px 32px 32px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
  text-align: center;
`;

export const List = styled(FlatList).attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 128,
  },
}))`
  flex: 1;
`;

export const FooterContainer = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.0)', 'rgba(0,0,0,.9)', '#000', 'rgba(0,0,0,1)'],
}))`
  padding: 32px 16px 8px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

/**
 * Skill
 */

export const SkillButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  height: 56;
  padding: 8px 16px;
`;

export const SkillInfo = styled.View`
  flex: 1;
`;

export const SkillTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-size: 16px;
  font-family: ${fonts.semiBold};
`;

export const SkillDescription = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.inputPlaceholderColor};
  font-size: ${props => props.fontSize || 14};
  font-family: ${fonts.semiBold};
  text-transform: capitalize;
`;

export const LevelContent = styled.View`
  align-items: flex-end;
  justify-content: center;
`;

/**
 * Bottom sheet
 */

export const BottomSheetContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const BottomSheetContent = styled.View`
  background: #0e0e0e;
  max-height: 300px;
  height: 300;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
`;

export const SkillLevelContainer = styled.View`
  flex: 1;
`;

/**
 * Skill level's
 */

export const SkillLevelHint = styled.Text`
  padding: 16px;
  font-size: 14px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
`;

export const SkillLevelList = styled.ScrollView.attrs(() => ({}))`
  flex: 1;
`;

export const SkillLevelButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  padding: 16px;
  height: 56px;
`;

export const SkillLevelContent = styled.View`
  flex: 1;
`;

export const StarContainer = styled.View`
  flex-direction: row;
`;

export const Star = styled(Icon).attrs(props => ({
  name: 'star',
  color: props.gold ? colors.gold : colors.inputPlaceholderColor,
  size: 16,
}))``;

export const SkillSelectedIcon = styled(Icon).attrs(() => ({
  color: colors.success,
  size: 24,
  name: 'check',
}))``;

/**
 * Buttons container
 */

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.single ? 'flex-end' : 'space-between')};
  padding: 16px;
`;

export const BottomButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { widht: 20, right: 20, bottom: 20, left: 20 },
}))`
  padding: 8px 16px;
  border-radius: 4px;
  border-width: ${props => (props.border ? 1 : 0)};
  border-color: ${colors.success};
  border-style: solid;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const BottomButtonText = styled.Text`
  color: ${props => (props.confirm ? colors.success : colors.danger)};
  font-family: ${fonts.semiBold};
`;
