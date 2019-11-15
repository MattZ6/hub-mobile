import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      CreateAccount,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#181818',
          elevation: 0,
        },
        headerTintColor: '#eee',
        headerBackTitleStyle: {
          fontWeight: '700',
        },
        headerPressColorAndroid: '#666',
      },
      transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    }
  )
);

export default Routes;
