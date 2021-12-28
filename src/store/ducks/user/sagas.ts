import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../../services/api/AuthApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setUserData } from './actionCreators';
import { FetchSignInActionInterface, UserActionsType } from './actionTypes';
import { UserState } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const { data }: UserState = yield call(AuthApi.signIn, payload.data);
    yield put(setUserData(data));
    if (data) {
      window.localStorage.setItem('token', data.token);
    }
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authMeRequest({ payload }: FetchSignInActionInterface) {
  try {
    const { data }: UserState = yield call(AuthApi.authMe);
    yield put(setUserData(data));
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeEvery(UserActionsType.AUTH_ME, authMeRequest);
}
