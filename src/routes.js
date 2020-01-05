import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

import Login from '~/pages/Login';
import CreateAccount from '~/pages/CreateAccount';
// import WelcomeBack from '~/pages/WelcomeBack';

import Profile from '~/pages/Profile';
import Main from '~/pages/Main';

import { fonts, colors } from '~/styles';

const routesStyleConfig = {
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
    headerPressColorAndroid: colors.inputPlaceholderColor,
  },
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
};

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator(
          {
            Login,
            CreateAccount,
          },
          routesStyleConfig
        ),
        App: createStackNavigator(
          {
            Profile,
            Main,
          },
          routesStyleConfig
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Login,
//       WelcomeBack,
//       Main,
//       CreateAccount,
//     },
//     {
//       headerLayoutPreset: 'center',
//       headerBackTitleVisible: false,
//       mode: 'card',
//       transparentCard: true,
//       cardStyle: {
//         backgroundColor: colors.dark,
//       },
//       defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: colors.dark,
//           elevation: 0,
//         },
//         headerTitleStyle: {
//           fontFamily: fonts.semiBold,
//         },
//         headerTintColor: colors.white,
//         headerPressColorAndroid: colors.inputPlaceholderColor,
//       },
//       transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
//     }
//   )
// );

// export default Routes;
