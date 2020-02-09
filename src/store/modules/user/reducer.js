import produce from 'immer';

import UserActionTypes from '~/store/modules/user/types';
import AuthActionTypes from '~/store/modules/auth/types';

import { returnFirstName } from '~/utils/validators';

const INITIAL_STATE = {
  profile: null,
  selectedLocation: null,

  hasProfile: false,
  instrumentsConfigured: false,
  stylesConfigured: false,

  loading: false,
  updating: false,
};

export default function auth(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case AuthActionTypes.SIGN_IN_SUCCESS: {
        draft.hasProfile = true;
        draft.instrumentsConfigured = payload.user.first_skill_configuration;
        draft.stylesConfigured = payload.user.first_style_configuration;
        draft.profile = {
          ...payload.user,
          firstName: returnFirstName(payload.user.name),
        };
        break;
      }

      case AuthActionTypes.SIGN_UP_SUCCESS: {
        draft.hasProfile = true;
        draft.instrumentsConfigured = payload.user.first_skill_configuration;
        draft.stylesConfigured = payload.user.first_style_configuration;
        draft.profile = {
          ...payload.user,
          firstName: returnFirstName(payload.user.name),
        };
        break;
      }

      case UserActionTypes.UPDATE_SKILLS_CONFIGURATION: {
        draft.instrumentsConfigured = payload;
        break;
      }

      case UserActionTypes.UPDATE_STYLES_CONFIGURATION: {
        draft.stylesConfigured = payload;
        break;
      }

      case UserActionTypes.UPDATE_REQUEST: {
        draft.updating = true;
        break;
      }

      case UserActionTypes.UPDATE_SUCCESS: {
        draft.updating = false;

        if (payload.name) {
          draft.profile.name = payload.name;
          draft.profile.firstName = returnFirstName(payload.name);
        }

        if (payload.email) {
          draft.profile.email = payload.email;
        }
        break;
      }

      case UserActionTypes.UPDATE_FAILURE: {
        draft.updating = false;
        break;
      }

      case UserActionTypes.REMOVE: {
        draft.profile = null;
        draft.instrumentsConfigured = false;
        draft.stylesConfigured = false;
        draft.hasProfile = false;
        break;
      }

      case UserActionTypes.LOCATION_SELECT: {
        draft.selectedLocation = payload;
        break;
      }

      case UserActionTypes.LOCATION_REMOVE: {
        draft.selectedLocation = null;
        break;
      }

      default:
    }
  });
}
