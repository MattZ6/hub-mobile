import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
  },
})`
  flex: 1;
`;

export const Header = styled.Text`
  margin: 16px 0;
  padding: 0 40px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
  text-align: center;
`;
