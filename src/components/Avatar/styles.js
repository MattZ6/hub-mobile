import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/styles';

export const Picture = styled.ImageBackground.attrs({
  resizeMode: 'contain',
  imageStyle: { borderRadius: 60 },
})`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: ${colors.inputBackground};
  margin: 16px 0;
  align-self: center;
`;

export const Button = styled(RectButton).attrs({
  borderRadius: 60,
})`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
