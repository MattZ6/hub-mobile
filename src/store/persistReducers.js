import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'hub_mobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'userStyles'],
    },
    reducers
  );

  return persistedReducer;
};
