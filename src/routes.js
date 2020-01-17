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
import ChangePassword from '~/pages/ChangePassword';
import UpdateName from '~/pages/UpdateName';

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
      marginTop: 20,
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

function returnNavigationStack(signed, hasProfile, configured) {
  if (signed && hasProfile && !configured) return 'Config';

  if (!signed && hasProfile) return 'Sign';

  if (!signed && !hasProfile) return 'Auth';

  return 'App';
}

export default (signed = false, hasProfile = false, configured = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Config: createStackNavigator(
          {
            SkillsConfiguration,
          },
          routesStyleConfig
        ),
        Sign: createStackNavigator(
          {
            WelcomeBack,
          },
          routesStyleConfig
        ),
        Auth: createStackNavigator(
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
            ChangePassword,
            UpdateName,
          },
          routesStyleConfig
        ),
      },
      {
        initialRouteName: returnNavigationStack(signed, hasProfile, configured),
      }
    )
  );
