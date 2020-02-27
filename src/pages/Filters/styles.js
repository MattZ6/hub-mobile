import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { fonts, colors } from '~/styles';

export const Container = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 100,
    paddingBottom: 20,
  },
})`
  flex: 1;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  align-self: center;
  font-family: ${fonts.bold};
  font-size: 14px;
  color: ${colors.inputPlaceholderColor};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 10px 20px;
`;

/**
 * Region List
 */

export const ContentContainer = styled.View``;

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
  /* height: 40px; */
`;

export const ButtonContent = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const ButtonTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.white};
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
  background: ${colors.skillLevelBackground};
`;

export const RoundButtonText = styled.Text`
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-size: 14px;
  font-family: ${fonts.semiBold};
  padding-left: ${props => (props.selected ? '0px' : '32px')};
  height: 17px;
`;
