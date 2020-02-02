import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '~/components/Button';

import { colors, fonts } from '~/styles';

export const Form = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 100,
    paddingBottom: 40,
  },
})`
  flex: 1;
`;

export const FormBackground = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.0)', 'rgba(0,0,0,.9)', '#000', 'rgba(0,0,0,1)'],
}))`
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  margin-bottom: 40px;
  font-family: ${fonts.semiBold};
  font-size: 48px;
  text-shadow: 2px 2px 3px ${colors.black};
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
`;
