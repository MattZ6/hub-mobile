import styled from 'styled-components/native';

import Button from '~/components/Button';
import ButtonClear from '~/components/ButtonClear';

import { colors, fonts } from '~/styles';

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
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
})`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
