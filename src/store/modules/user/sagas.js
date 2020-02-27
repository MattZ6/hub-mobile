import { takeLatest, call, put, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import api from '~/services/api';
// import { showSuccessSnack } from '~/services/toast';
import { throwRequestErrorMessage } from '~/utils/error';

import ActionTypes from '~/store/modules/user/types';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateUser({ payload }) {
  try {
    // const { name, email, ...rest } = payload.data;

    // const profile = {
    //   name,
    //   email,
    //   ...(rest.oldPassword ? rest : {}),
    // };

    // console.tron.log(payload.data);

    const { data } = yield call(api.put, 'v1/users', payload.data);

    yield put(updateProfileSuccess(data));

    // StackActions.popToTop();

    // store.dispatch(NavigationActions.navigate({ routeName: 'Profile' }));

    // yield put(NavigationActions.navigate({ routeName: 'Profile' }));

    yield put(NavigationActions.navigate({ routeName: 'Profile' }));

    // showSuccessSnack('Perfil atualizado com sucesso!');
  } catch (err) {
    throwRequestErrorMessage(err);

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(ActionTypes.UPDATE_REQUEST, updateUser),
  // takeLatest(StackActions.POP_TO_TOP, batata),
]);
