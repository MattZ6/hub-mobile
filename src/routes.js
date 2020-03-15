import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

import Login from '~/pages/Login';
import CreateAccount from '~/pages/CreateAccount';

import WelcomeBack from '~/pages/WelcomeBack';

import StylePreferences from '~/pages/StylePreferences';
import Main from '~/pages/Main';
import Profile from '~/pages/Profile';
import SearchMusicians from '~/pages/SearchMusicians';
import SkillsConfiguration from '~/pages/SkillsConfiguration';
import UpdateName from '~/pages/UpdateName';
import ChangeEmail from '~/pages/ChangeEmail';
import ChangePassword from '~/pages/ChangePassword';
import ChangeNickname from '~/pages/ChangeNickname';
import ChangeWhatsApp from '~/pages/ChangeWhatsApp';
import PublicProfile from '~/pages/PublicProfile';
import SelectLocation from '~/pages/SelectLocation';
import Filters from '~/pages/Filters';
import UserStylePreferences from '~/pages/UserStylePreferences';
import UserSkills from '~/pages/UserSkills';

import { colors } from '~/styles';

const routesStyleConfig = {
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  mode: 'card',
  transparentCard: true,
  cardStyle: {
    backgroundColor: colors.dark,
  },
  defaultNavigationOptions: {
    headerShown: false,
    // headerStyle: {
    //   backgroundColor: colors.dark,
    //   marginTop: 20,
    //   elevation: 0,
    // },
    // headerTitleStyle: {
    //   fontFamily: fonts.semiBold,
    // },
    // headerTintColor: colors.white,
    // headerPressColorAndroid: colors.inputPlaceholderColor,
  },
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
};

function returnNavigationStack(
  signed,
  hasProfile,
  skillsConfigured,
  stylesConfigured
) {
  if (signed && hasProfile && !skillsConfigured) return 'SkillsConfig';

  if (signed && hasProfile && skillsConfigured && !stylesConfigured)
    return 'StylesConfig';

  if (!signed && hasProfile) return 'Sign';

  if (!signed && !hasProfile) return 'Auth';

  return 'App';
}

export default (
  signed = false,
  hasProfile = false,
  skillsConfigured = false,
  stylesConfigured = false
) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SkillsConfig: createStackNavigator(
          {
            SkillsConfiguration,
          },
          routesStyleConfig
        ),
        StylesConfig: createStackNavigator(
          {
            StylePreferences,
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
            SelectLocation,
          },
          routesStyleConfig
        ),
        App: createStackNavigator(
          {
            Main,
            StylePreferences,
            SkillsConfiguration,
            SearchMusicians,
            Profile,
            UpdateName,
            ChangeEmail,
            ChangePassword,
            ChangeNickname,
            ChangeWhatsApp,
            PublicProfile,
            SelectLocation,
            Filters,
            UserStylePreferences,
            UserSkills,
          },
          routesStyleConfig
        ),
      },
      {
        initialRouteName: returnNavigationStack(
          signed,
          hasProfile,
          skillsConfigured,
          stylesConfigured
        ),
      }
    )
  );
