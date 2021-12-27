import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../../services/api/AuthApi';
import { LoadingStatus } from '../../types';
import {
  FetchSignInActionInterface,
  setLoadingStatus,
  setUserData,
  UserActionsType,
} from './actionCreators';
import { UserState } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const data: UserState = yield call(AuthApi.signIn, payload.data);
    yield put(setUserData(data.data));
    if (data.data) {
      window.localStorage.setItem('token', data.data.token);
    }
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
