import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
})`
  flex: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
