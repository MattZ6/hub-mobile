import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '~/components/Loading';

import { colors, fonts } from '~/styles';

export const Container = styled.View``;

export const List = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingTop: 32,
  },
}))``;

export const Item = styled.View`
  padding: 8px 16px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  /* height: 56,
              paddingVertical: 8,
              paddingHorizontal: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between', */
`;

export const ItemTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
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
  size: 24,
}))``;

export const Loader = styled(Loading).attrs(() => ({
  size: 24,
  color: 'pink',
}))``;
