import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Icon).attrs(() => ({
  size: 120,
  color: colors.inputPlaceholderColor,
}))``;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  margin: 8px 0;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
`;
