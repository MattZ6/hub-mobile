import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

import Login from '~/pages/Login';
import CreateAccount from '~/pages/CreateAccount';

import WelcomeBack from '~/pages/WelcomeBack';

import Main from '~/pages/Main';
import Profile from '~/pages/Profile';
import SearchMusicians from '~/pages/SearchMusicians';
import SkillsConfiguration from '~/pages/SkillsConfiguration';

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

function returnNavigationStack(signed = false, hasProfile = false) {
  if (!signed && hasProfile) return 'Auth';

  if (!signed && !hasProfile) return 'Sign';

  return 'App';
}

export default (signed = false, hasProfile = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createStackNavigator(
          {
            WelcomeBack,
          },
          routesStyleConfig
        ),
        Sign: createStackNavigator(
          {
            Login,
            CreateAccount,
          },
          routesStyleConfig
        ),
        App: createStackNavigator(
          {
            Main,
            SkillsConfiguration,
            SearchMusicians,
            Profile,
          },
          routesStyleConfig
        ),
      },
      {
        initialRouteName: returnNavigationStack(signed, hasProfile),
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
