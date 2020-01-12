import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const ListHeader = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 48px;
  color: ${colors.white};
  padding: 20px;
  padding-top: 80px;
`;
