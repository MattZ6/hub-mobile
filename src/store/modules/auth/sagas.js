import { takeLatest, call, put, all } from 'redux-saga/effects';

import api, { setAuthHeader } from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import {
  signInSuccess,
  signFailure,
  signUpSuccess,
} from '~/store/modules/auth/actions';

import ActionTypes from '~/store/modules/auth/types';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'v1/sessions', { email, password });

    const { access_token } = data;

    setAuthHeader(access_token);

    yield put(signInSuccess(access_token));
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.post, 'v1/users', payload.data);

    const { access_token } = data;

    setAuthHeader(access_token);

    yield put(signUpSuccess(access_token));
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { access_token } = payload.auth;

  if (access_token) {
    setAuthHeader(access_token);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),

  takeLatest(ActionTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(ActionTypes.SIGN_UP_REQUEST, signUp),
]);
