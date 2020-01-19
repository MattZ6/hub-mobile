import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 100px;
  background: ${colors.inputBackground};
`;

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const Info = styled.View`
  padding: 16px 16px 0;
`;

export const ShimmerNick = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  colorShimmer: [
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.05)',
  ],
  width: 120,
  height: 18,
}))`
  margin-bottom: 4px;
`;

export const Nick = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.semiBold};
  margin-bottom: 4px;
`;

export const ShimmerName = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  colorShimmer: [
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.05)',
  ],
  width: 300,
  height: 30,
}))``;

export const Name = styled.Text.attrs(() => ({
  numberOfLines: 2,
}))`
  color: ${colors.white};
  font-size: 26px;
  font-family: ${fonts.semiBold};
`;

export const SectionTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.semiBold};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 16px;
  margin-top: 16px;
`;

export const About = styled.Text.attrs(() => ({
  numberOfLines: 3,
}))`
  font-family: ${fonts.medium};
  color: ${colors.white};
  font-size: 15px;
  padding: 0 16px;
`;

/**
 * Location
 */

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 4px 0;
`;

export const ShimmerLocation = styled(ShimmerPlaceHolder).attrs(() => ({
  autoRun: true,
  colorShimmer: [
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.05)',
  ],
  width: 200,
  height: 22,
}))`
  margin-top: 5px;
`;

export const LocationText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
`;

export const LocationIcon = styled(Icon).attrs(() => ({
  name: 'room',
  size: 18,
  color: colors.pin,
}))`
  margin-right: 8px;
`;
