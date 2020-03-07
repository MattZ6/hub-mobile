import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 32,
  },
}))`
  flex: 1;
`;

/**
 * Info
 */

export const InfoContainer = styled.View`
  padding: 16px 0 8px;
`;

export const Nick = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
  margin: 0 16px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 26px;
  font-family: ${fonts.semiBold};
  margin: 0 16px;
`;

export const AddressContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 8px 16px 0;
  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.showBottomLine ? colors.skillLevelBackground : 'transparent'};
`;

export const AddressIcon = styled(Icon).attrs(() => ({
  name: 'room',
  size: 18,
  color: colors.pin,
}))`
  padding-right: 8px;
`;

export const AddressText = styled.Text`
  flex: 1;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
`;

export const ContactButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #0f0f0f;
`;

export const WhatsIcon = styled.Image`
  width: 28;
  height: 28;
`;

export const ContactButtonTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 16px;
  margin-left: 16px;
`;

/** Skills */

export const SectionTitle = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-size: 13px;
  font-family: ${fonts.bold};
  margin: 16px 16px 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

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

/** Styles */

export const StyleList = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
  },
}))``;

export const Style = styled.View`
  align-items: center;
  justify-content: center;
  /* background: ${colors.skillLevelBackground}; */
  border-style: solid;
  border-width:1px;
  border-color:${colors.skillLevelBackground};
  padding: 8px 22px;
  border-radius: 32px;
  margin-left: 8px;
`;

export const StyleTitle = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;
