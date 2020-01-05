import ActionTypes from '~/store/modules/auth/types';

export function signInRequest(email, password) {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(access_token) {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload: { access_token },
  };
}

export function signUpRequest(data) {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
    payload: { data },
  };
}

export function signUpSuccess(access_token) {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload: { access_token },
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
