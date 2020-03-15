import produce from 'immer';

import ActionTypes from '~/store/modules/userSkills/types';
import AuthActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  userSkills: null,
};

export default function userSkills(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case ActionTypes.SET: {
        draft.userSkills = payload.data;
        break;
      }

      case ActionTypes.ADD: {
        draft.userSkills = [...payload.data, ...draft.userSkills];
        break;
      }

      case ActionTypes.REMOVE: {
        draft.userSkills = draft.userSkills.filter(x => x.id !== payload.id);
        break;
      }

      /**
       * Sign out
       */

      case AuthActionTypes.SIGN_OUT: {
        draft.userSkills = null;
        break;
      }

      default:
    }
  });
}
