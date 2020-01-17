import produce from 'immer';

import UserActionTypes from '~/store/modules/user/types';
import AuthActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  profile: null,

  hasProfile: false,
  instrumentsConfigured: false,

  loading: false,
  updating: false,
};

export default function auth(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case AuthActionTypes.SIGN_IN_SUCCESS: {
        draft.hasProfile = true;
        draft.instrumentsConfigured = payload.user.first_skill_configuration;
        draft.profile = {
          ...payload.user,
          firstName: payload.user.name.includes(' ')
            ? payload.user.name.split(' ')[0]
            : payload.user.name,
        };
        break;
      }

      case UserActionTypes.UPDATE_CONFIGURATION: {
        draft.instrumentsConfigured = payload;
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
          draft.profile.firstName = payload.name.includes(' ')
            ? payload.name.split(' ')[0]
            : payload.name;
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
        draft.hasProfile = false;
        break;
      }

      default:
    }
  });
}
