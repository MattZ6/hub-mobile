import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled(Animated.View)`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const IconContainer = styled.View`
  width: 134px;
  height: 134px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  background: ${colors.skillLevelBackground};
`;

export const StyledIcon = styled(Icon).attrs(() => ({
  size: 96,
  color: colors.inputPlaceholderColor,
}))``;

export const Title = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-size: 18px;
  margin: 8px 0;
  font-family: ${fonts.semiBold};
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.clearButtonTextColor};
  font-size: 16px;
  font-family: ${fonts.medium};
  text-align: center;
`;
