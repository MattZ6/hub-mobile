import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 64,
  },
}))`
  flex: 1;
`;

/**
 * Info
 */

export const InfoContainer = styled.View`
  padding: 16px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

/**
 * Info's nickname
 */

export const NickContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 16px;
  margin-top: 16px;
`;

export const NickShimmer = styled(ShimmerPlaceHolder).attrs(() => ({
  ...colors.shimmer,
  width: 120,
  height: 16,
}))`
  margin-top: 16px;
`;

export const Nick = styled.Text`
  color: ${colors.white};
  font-size: 16;
  font-family: ${fonts.semiBold};
`;

/**
 * Info's name
 */

export const NameContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* height: 26px; */
  margin-top: 8px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 26;
  font-family: ${fonts.semiBold};
`;

/**
 * Info's address
 */

export const AddressContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 18px;
  margin-top: 6px;
`;

export const AddressShimmer = styled(ShimmerPlaceHolder).attrs(() => ({
  ...colors.shimmer,
  width: 200,
  height: 18,
}))`
  margin-top: 6px;
`;

export const AddressIcon = styled(Icon).attrs(() => ({
  name: 'room',
  size: 18,
  color: colors.pin,
}))`
  padding-right: 8px;
`;

export const AddressText = styled.Text`
  flex: 1;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
`;

/**
 * Info's address
 */

export const About = styled.Text.attrs(() => ({
  numberOfLines: 3,
}))`
  font-family: ${fonts.medium};
  color: ${colors.white};
  font-size: 15px;
`;
