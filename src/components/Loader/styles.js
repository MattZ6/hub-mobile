import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View.attrs(() => ({
  elevation: 10,
}))`
  align-self: center;
  padding: 8px;
  margin: 16px;
  border-radius: 32;
  background: ${colors.skillLevelBackground};
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: colors.inputTextColor,
}))``;
