import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { throwRequestErrorMessage } from '~/utils/error';

import ActionTypes from '~/store/modules/region/types';
import {
  createRegionSuccess,
  createRegionFailure,
} from '~/store/modules/region/actions';

export function* createRegion({ payload }) {
  try {
    const { data } = yield call(api.post, 'v1/regions', payload);

    yield put(createRegionSuccess(data));
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(createRegionFailure());
  }
}

// takeLatest(ActionTypes.CREATE_REQUEST, createRegion)
export default all([]);
