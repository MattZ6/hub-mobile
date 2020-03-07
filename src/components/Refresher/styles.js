import styled from 'styled-components/native';
import { darken } from 'polished';

import { colors } from '~/styles';

export const Container = styled.RefreshControl.attrs(() => ({
  colors: [darken(0.1, colors.success)],
}))``;
