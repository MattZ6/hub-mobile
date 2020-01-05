import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import ActionTypes from '~/store/modules/user/types';
import {
  loadUserSuccess,
  loadUserFailure,
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* loadUser() {
  try {
    const { data } = yield call(api.get, 'v1/users');

    yield put(loadUserSuccess(data));
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(loadUserFailure());
  }
}

export function* updateUser({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    yield call(api.put, 'users', profile);

    // yield put(loadUserRequest());

    yield put(updateProfileSuccess());
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(ActionTypes.LOAD_REQUEST, loadUser),
  takeLatest(ActionTypes.UPDATE_REQUEST, updateUser),
]);
