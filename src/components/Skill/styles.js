import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  height: 40px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
`;

export const Level = styled.Text.attrs(() => ({
  elevation: 5,
  shadowOffset: {
    width: 2,
    height: 3,
  },
  shadowOpacity: 0.8,
}))`
  color: ${colors.white};
  font-size: 11px;
  font-family: ${fonts.bold};
  padding: 4px 8px;
  background: ${colors.inputPlaceholderColor};
  border-radius: 4px;
`;
