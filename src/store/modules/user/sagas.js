import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import ActionTypes from '~/store/modules/user/types';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateUser({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    yield call(api.put, 'v1/users', profile);

    yield put(updateProfileSuccess(payload.data));
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(ActionTypes.UPDATE_REQUEST, updateUser)]);
