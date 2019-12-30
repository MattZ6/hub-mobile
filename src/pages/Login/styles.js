import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

import { colors, fonts } from '~/styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  margin-bottom: 40px;
  font-family: ${fonts.semiBold};
  font-size: 48px;
  text-shadow: 2px 2px 3px ${colors.black};
`;

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
