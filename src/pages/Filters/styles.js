import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { fonts, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  align-self: center;
  font-family: ${fonts.semiBold};
  font-size: 16px;
  color: ${colors.clearButtonTextColor};
  margin: 10px 20px 20px;
`;

export const ContentContainer = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 32,
  },
})``;

export const RegionButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  height: 40px;
`;

export const SkillButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;

export const ButtonContent = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const ButtonTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-family: ${fonts.semiBold};
  font-size: 16px;
  text-transform: ${props => (props.transform ? 'capitalize' : 'none')};
`;

export const ButtonDescription = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 14px;
`;

export const SelectionIcon = styled(Icon).attrs(() => ({
  color: colors.success,
}))``;

export const RoundButtonContainer = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RoundButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;

  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 16px;
  border-radius: 32px;
  margin: 0 10px 10px 0;
  background: #0e0e0e;
`;

export const RoundButtonText = styled.Text`
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-size: 14px;
  font-family: ${fonts.semiBold};
  padding-left: ${props => (props.selected ? '0px' : '32px')};
  height: 17px;
`;

/**
 *
 */

export const SkillLevelButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;

export const SkillLevelContainer = styled.View`
  flex: 1;
`;

export const SkillLevelTitle = styled.Text`
  font-family: ${fonts.semiBold};
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-size: 16px;
  margin-top: 2px;
`;

export const StarContainer = styled.View`
  flex-direction: row;
`;

export const Star = styled(Icon).attrs(props => ({
  color: props.gold ? colors.gold : colors.inputPlaceholderColor,
  size: 16,
  name: 'star',
}))``;
