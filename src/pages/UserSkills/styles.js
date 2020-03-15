import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const List = styled(FlatList).attrs(() => ({
  paddingTop: 32,
  paddingBottom: 84,
}))`
  flex: 1;
`;

/**
 * Skill
 */

export const SkillContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  height: 56px;
  padding: 8px 16px;
`;

export const SkillInfo = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 16px;
`;

export const SkillTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
  text-transform: capitalize;
`;

export const SkillDescription = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.inputPlaceholderColor};
  font-size: 14px;
  font-family: ${fonts.semiBold};
  text-transform: capitalize;
`;

export const RemoveButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))``;

export const StyledIcon = styled(Icon).attrs(props => ({
  size: props.size || 24,
  color: props.color || colors.inputPlaceholderColor,
}))``;
