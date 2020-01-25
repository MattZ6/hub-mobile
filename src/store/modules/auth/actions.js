import ActionTypes from '~/store/modules/auth/types';

export function signInRequest(email, password) {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(payload) {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload,
  };
}

export function signUpRequest(data) {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
    payload: { data },
  };
}

export function signUpSuccess(payload) {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload,
  };
}

export function signFailure() {
  return {
    type: ActionTypes.SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: ActionTypes.SIGN_OUT,
  };
}
