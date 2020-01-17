import ActionTypes from '~/store/modules/user/types';

/**
 * Update user data
 */

export function updateProfileRequest(data) {
  return {
    type: ActionTypes.UPDATE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(payload) {
  return {
    type: ActionTypes.UPDATE_SUCCESS,
    payload,
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

/**
 * Update first skill configuration
 */

export function updateUserFirsSkillConfiguration(payload) {
  return {
    type: ActionTypes.UPDATE_CONFIGURATION,
    payload,
  };
}
