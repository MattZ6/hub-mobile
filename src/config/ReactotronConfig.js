import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative({host: '192.168.1.12'})
    .connect();

  console.tron = tron;

  tron.clear();
}
