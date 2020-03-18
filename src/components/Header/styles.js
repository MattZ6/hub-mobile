import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const TOOLBAR_HEIGHT = 82;

export const Container = styled.View`
  z-index: 10;
`;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 34px 16px 16px;
  height: ${TOOLBAR_HEIGHT};
  background: ${colors.dark};
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  margin-left: 16;
  margin-right: 16;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 20;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  width: 32px;
  height: 32px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const HeaderIcon = styled(Icon).attrs(() => ({
  size: 24,
  color: colors.inputPlaceholderColor,
}))``;

export const Shadow = styled(LinearGradient).attrs(() => ({
  colors: [colors.dark, 'transparent'],
}))`
  position: absolute;
  top: ${TOOLBAR_HEIGHT}px;
  left: 0;
  right: 0;
  height: 32px;
`;
