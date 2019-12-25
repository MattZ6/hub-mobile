import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

import Login from '~/pages/Login';
import CreateAccount from '~/pages/CreateAccount';
import WelcomeBack from '~/pages/WelcomeBack';
import Main from '~/pages/Main';

import { fonts, colors } from '~/styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
      CreateAccount,
      WelcomeBack,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      mode: 'card',
      transparentCard: true,
      cardStyle: {
        backgroundColor: colors.dark,
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.dark,
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: fonts.semiBold,
        },
        headerTintColor: colors.white,
        headerPressColorAndroid: colors.inputBackground,
      },
      transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    }
  )
);

export default Routes;
