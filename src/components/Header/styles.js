import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 10;
`;

export const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 34px 16px 16px;
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

export const HeaderButton = styled(BorderlessButton).attrs(() => ({
  borderless: true,
}))`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const Shadow = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.9)', 'transparent'],
}))`
  height: 32px;
`;
