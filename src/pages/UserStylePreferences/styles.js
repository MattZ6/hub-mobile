import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '~/components/Loading';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled(FlatList).attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 84,
  },
}))``;

export const ListHeader = styled.View`
  color: ${colors.inputPlaceholderColor};
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ListHeaderHint = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
  text-align: center;
`;

export const Item = styled.View`
  padding: 8px 16px;
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
  margin-left: 16px;
`;

export const DeleteHint = styled.Text`
  color: ${colors.danger};
  font-size: 12px;
  font-family: ${fonts.medium};
  margin-left: 16px;
`;

export const RightButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
}))`
  margin-left: 16px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const ButtonIcon = styled(Icon).attrs(props => ({
  color: props.selected ? colors.danger : colors.inputPlaceholderColor,
  size: props.size || 24,
}))``;

export const Loader = styled(Loading).attrs(() => ({
  size: 24,
  color: 'pink',
}))``;
