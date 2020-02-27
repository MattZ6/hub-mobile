import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 48px;
  color: ${colors.white};
  padding: 20px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  padding: 0 16px;
  margin-top: 22px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  width: 34;
  height: 34;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
