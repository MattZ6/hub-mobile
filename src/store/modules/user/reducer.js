import produce from 'immer';

import ActionTypes from '~/store/modules/user/types';

const INITIAL_STATE = {
  profile: null,
  loading: false,
  updating: false,
};

export default function auth(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case ActionTypes.LOAD_REQUEST: {
        draft.loading = true;
        break;
      }

      case ActionTypes.LOAD_SUCCESS: {
        draft.profile = {
          ...payload.profile,
          firstName: payload.profile.name.includes(' ')
            ? payload.profile.name.split(' ')[0]
            : payload.profile.name,
        };
        draft.loading = false;
        break;
      }

      case ActionTypes.LOAD_FAILURE: {
        draft.loading = false;
        break;
      }

      case ActionTypes.UPDATE_REQUEST: {
        draft.updating = true;
        break;
      }

      case ActionTypes.UPDATE_SUCCESS: {
        draft.updating = false;
        break;
      }

      case ActionTypes.UPDATE_FAILURE: {
        draft.updating = false;
        break;
      }

      case ActionTypes.REMOVE: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
