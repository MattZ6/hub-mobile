import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const SerchButton = styled(RectButton)`
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 48px;
  color: ${colors.white};
  padding: 20px;
  padding-top: 80px;
`;
