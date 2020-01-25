import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { colors } from '~/styles';

export const ShimmerStyle = styled(ShimmerPlaceHolder).attrs(() => ({
  ...colors.shimmer,
}))``;
