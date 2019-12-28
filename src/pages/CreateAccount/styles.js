import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  // marginBottom: 80,
  contentContainerStyle: {
    paddingBottom: 120,
  },
})`
  flex: 1;
  padding: 20px 20px 0;
`;

export const Image = styled.Image`
  align-self: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background: ${colors.inputBackground};
`;
