import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

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
`;

export const HeaderButton = styled(BorderlessButton)`
  width: 34;
  height: 34;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
