import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fonts } from '~/styles';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  height: 56px;
  padding: 8px 16px;
  border-radius: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.semiBold};
  font-size: 18px;
`;

export const Label = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 14px;
  text-transform: capitalize;
`;

export const CheckContainer = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const NotChecked = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.inputPlaceholderColor};
`;

export const Check = styled(Icon).attrs({
  name: 'check-circle',
  color: colors.success,
  size: 24,
})``;
