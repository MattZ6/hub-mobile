import produce from 'immer';

import ActionTypes from '~/store/modules/userStyles/types';
import AuthActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  userStyles: null,
};

export default function userStyles(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case ActionTypes.SET: {
        draft.userStyles = payload.data;
        break;
      }

      case ActionTypes.ADD: {
        draft.userStyles = [...payload.data, ...draft.userStyles];
        break;
      }

      case ActionTypes.REMOVE: {
        draft.userStyles = draft.userStyles.filter(x => x.id !== payload.id);
        break;
      }

      /**
       * Sign out
       */

      case AuthActionTypes.SIGN_OUT: {
        draft.userStyles = null;
        break;
      }

      default:
    }
  });
}
