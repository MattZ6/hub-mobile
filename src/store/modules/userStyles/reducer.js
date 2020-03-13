import produce from 'immer';

import ActionTypes from '~/store/modules/userStyles/types';

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

      default:
    }
  });
}
