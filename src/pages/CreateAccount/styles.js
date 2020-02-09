import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

import { colors, fonts } from '~/styles';

export const Container = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  font-size: 16px;
  margin-top: 16px;
`;

export const Description = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.inputPlaceholderColor};
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 100,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
