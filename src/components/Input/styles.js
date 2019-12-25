import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { fonts, colors } from '~/styles';

export const Container = styled.View`
  margin-bottom: 6px;
  height: 68px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.inputPlaceholderColor,
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'off',
  contextMenuHidden: true,
  selectionColor: '#55CEF2',
})`
  font-family: ${fonts.medium};
  background: ${colors.inputBackground};
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  color: ${colors.inputTextColor};
  font-size: 16px;
  border-width: ${StyleSheet.hairlineWidth};
  border-style: solid;
  border-color: ${props =>
    props.invalid && !props.disabled ? colors.danger : colors.inputBackground};
`;

export const ErrorMessage = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.danger};
  font-size: 13px;
  margin-top: 4px;
  line-height: 20px;
`;
