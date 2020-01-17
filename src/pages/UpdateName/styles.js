import styled from 'styled-components/native';

import Button from '~/components/Button';

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
