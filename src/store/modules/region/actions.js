import ActionTypes from '~/store/modules/region/types';

export function createRegionRequest(name) {
  return {
    type: ActionTypes.CREATE_REQUEST,
    payload: { name },
  };
}

export function createRegionSuccess(data) {
  return {
    type: ActionTypes.CREATE_SUCCESS,
    payload: { data },
  };
}

export function createRegionFailure() {
  return {
    type: ActionTypes.CREATE_FAILURE,
  };
}

export function removeRegion() {
  return {
    type: ActionTypes.REMOVE,
  };
}
