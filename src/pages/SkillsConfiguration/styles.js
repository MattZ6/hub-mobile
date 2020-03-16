import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
