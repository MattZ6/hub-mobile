import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
`;

export const Star = styled(Icon).attrs(props => ({
  color: props.gold ? colors.gold : colors.inputPlaceholderColor,
  size: 16,
  name: 'star',
}))``;
