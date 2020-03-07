import React from 'react';
import { BackHandler } from 'react-native';

export function useBackButton(handler) {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
