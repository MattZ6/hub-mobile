import styled from 'styled-components/native';

import Button from '~/components/Button';

import { colors, fonts } from '~/styles';

export const Label = styled.Text`
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  font-size: 16px;
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
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
})`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
