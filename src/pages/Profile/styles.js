import styled from 'styled-components/native';

import ButtonClear from '~/components/ButtonClear';
import { colors, fonts } from '~/styles';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 16,
  },
})`
  flex: 1;
`;

export const Nickname = styled.Text.attrs({
  numberOfLines: 1,
})`
  text-align: center;
  font-family: ${fonts.bold};
  color: ${colors.white};
  font-size: 24px;
  padding: 0 16px;
  margin: 8px 0;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  font-family: ${fonts.semiBold};
  color: ${colors.white};
  font-size: 18px;
  padding: 0 16px;
`;

export const SectionTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 16px;
  margin: 16px 0;
`;

export const SignOuButton = styled(ButtonClear)`
  margin-top: 8px;
  height: 56px;
`;
