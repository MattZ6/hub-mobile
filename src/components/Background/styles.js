import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.ScrollView.attrs({
  renderToHardwareTextureAndroid: true,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.dark};
`;
