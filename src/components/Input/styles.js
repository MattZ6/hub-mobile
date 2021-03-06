import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { fonts, colors } from '~/styles';

export const Wrapper = styled.View`
  margin-bottom: 6px;
  height: ${props => (props.title ? 88 : 68)}px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  background: ${colors.inputBackground};
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth};
  border-style: solid;
  border-color: ${props =>
    props.invalid && !props.disabled ? colors.danger : colors.inputBackground};
`;

export const Counter = styled.Text`
  padding-left: 16px;
  margin-right: 16px;
  color: ${colors.inputPlaceholderColor};
  font-size: 15px;
  letter-spacing: 1.1px;
  font-family: ${fonts.bold};
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.inputPlaceholderColor,
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'off',
  contextMenuHidden: true,
  selectionColor: colors.black,
})`
  flex: 1;
  font-family: ${fonts.medium};
  padding: 10px 16px;
  font-size: 16px;
  color: ${colors.white};
`;

export const ErrorMessage = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.danger};
  font-size: 13px;
  margin-top: 4px;
  line-height: 20px;
`;
