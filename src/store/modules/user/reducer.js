import produce from 'immer';

import UserActionTypes from '~/store/modules/user/types';
import AuthActionTypes from '~/store/modules/auth/types';

import { returnFirstName } from '~/utils/validators';

const INITIAL_STATE = {
  profile: null,
  // selectedLocation: null,

  hasProfile: false,
  firstSkillConfig: false,
  firstPreferenceConfig: false,

  loading: false,
  updating: false,
};

function updateProfileInfo(data) {
  return {
    ...data,
    firstName: returnFirstName(data.name),
  };
}

export default function user(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case AuthActionTypes.SIGN_IN_SUCCESS: {
        draft.hasProfile = true;
        draft.firstSkillConfig = payload.user.first_skill_configuration;
        draft.firstPreferenceConfig = payload.user.first_styles_configuration;
        draft.profile = updateProfileInfo(payload.user);
        break;
      }

      case AuthActionTypes.SIGN_UP_SUCCESS: {
        draft.hasProfile = true;
        draft.firstSkillConfig = payload.user.first_skill_configuration;
        draft.firstPreferenceConfig = payload.user.first_styles_configuration;
        draft.profile = updateProfileInfo(payload.user);
        break;
      }

      case UserActionTypes.UPDATE_SKILLS_CONFIGURATION: {
        draft.firstSkillConfig = payload;
        break;
      }

      case UserActionTypes.UPDATE_STYLES_CONFIGURATION: {
        draft.firstPreferenceConfig = payload;
        break;
      }

      case UserActionTypes.UPDATE_REQUEST: {
        draft.updating = true;
        break;
      }

      case UserActionTypes.UPDATE_SUCCESS: {
        draft.updating = false;
        draft.profile = updateProfileInfo(payload);

        if (!draft.firstSkillConfig) {
          draft.firstSkillConfig = payload.first_skill_configuration;
        }

        if (!draft.firstPreferenceConfig) {
          draft.firstPreferenceConfig = payload.first_styles_configuration;
        }

        break;
      }

      case UserActionTypes.UPDATE_FAILURE: {
        draft.updating = false;
        break;
      }

      case UserActionTypes.REMOVE: {
        draft.profile = null;
        draft.firstSkillConfig = false;
        draft.firstPreferenceConfig = false;
        draft.hasProfile = false;
        break;
      }

      // case UserActionTypes.LOCATION_SELECT: {
      //   draft.selectedLocation = payload;
      //   break;
      // }

      // case UserActionTypes.LOCATION_REMOVE: {
      //   draft.selectedLocation = null;
      //   break;
      // }

      default:
    }
  });
}
