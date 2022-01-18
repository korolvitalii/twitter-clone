import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../../services/api/AuthApi';
import { UsersApi } from '../../../services/api/UserApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setUserData } from './actionCreators';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  UpdateUserDataInterface,
  UserActionsType,
} from './actionTypes';
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

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
  try {
    yield call(AuthApi.signUp, payload.data);
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchUserDataRequest() {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const { data }: UserState = yield call(AuthApi.authMe);
    yield put(setUserData(data));
    // yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* logOut() {
  try {
    window.localStorage.removeItem('token');
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* updateUserData({ payload: data }: UpdateUserDataInterface) {
  try {
    UsersApi.updateUserData(data.data);
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeEvery(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
  yield takeEvery(UserActionsType.LOG_OUT, logOut);
  yield takeEvery(UserActionsType.UPDATE_USER_DATA, updateUserData);
}
