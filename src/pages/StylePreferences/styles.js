import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 16, paddingBottom: 140 },
}))`
  flex: 1;
`;

export const Description = styled.Text`
  padding: 16px 32px 32px;
  color: ${colors.inputPlaceholderColor};
  font-family: ${fonts.medium};
  font-size: 16px;
  text-align: center;
`;

export const StylesContainer = styled.View`
  padding: 0 16px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Style = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;

  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 16px;
  border-radius: 32px;
  margin: 0 10px 10px 0;
  background: #0e0e0e;
`;

export const StyleName = styled.Text`
  color: ${props => (props.selected ? colors.success : colors.white)};
  font-size: 14px;
  font-family: ${fonts.semiBold};
  padding-left: ${props => (props.selected ? '0px' : '32px')};
  height: 17px;
`;

export const SelectedIcon = styled(Icon).attrs(() => ({
  name: 'check',
  size: 16,
  color: colors.success,
}))`
  margin: 0 8px;
`;

export const FooterContainer = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0,0,0,.0)', 'rgba(0,0,0,.9)', '#000', 'rgba(0,0,0,1)'],
}))`
  padding: 32px 16px 8px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;
