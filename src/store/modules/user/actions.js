import ActionTypes from '~/store/modules/user/types';

/**
 * Load user data
 */

export function loadUserRequest() {
  return {
    type: ActionTypes.LOAD_REQUEST,
  };
}

export function loadUserSuccess(profile) {
  return {
    type: ActionTypes.LOAD_SUCCESS,
    payload: { profile },
  };
}

export function loadUserFailure() {
  return {
    type: ActionTypes.LOAD_FAILURE,
  };
}

/**
 * Update user data
 */

export function updateProfileRequest(data) {
  return {
    type: ActionTypes.UPDATE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess() {
  return {
    type: ActionTypes.UPDATE_SUCCESS,
  };
}

export function updateProfileFailure() {
  return {
    type: ActionTypes.UPDATE_FAILURE,
  };
}

/**
 * Remove user data
 */

export function removeProfile() {
  return {
    type: ActionTypes.REMOVE,
  };
}
