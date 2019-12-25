import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import { colors } from '~/styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </>
  );
}
