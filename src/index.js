import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';
import App from '~/App';

import { colors } from '~/styles';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        <App />
      </PersistGate>
    </Provider>
  );
}
