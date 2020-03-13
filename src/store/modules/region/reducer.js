import produce from 'immer';

import RegionActionTypes from '~/store/modules/region/types';

const INITIAL_STATE = {
  region: null,
  submiting: false,
};

export default function region(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case RegionActionTypes.CREATE_REQUEST: {
        draft.submiting = true;
        break;
      }

      case RegionActionTypes.CREATE_SUCCESS: {
        draft.region = payload.data;
        draft.submiting = false;
        break;
      }

      case RegionActionTypes.CREATE_FAILURE: {
        draft.submiting = false;
        break;
      }

      case RegionActionTypes.REMOVE: {
        draft.submiting = false;
        draft.region = null;
        break;
      }

      default:
    }
  });
}
