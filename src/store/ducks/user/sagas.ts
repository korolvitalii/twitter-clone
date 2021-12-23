import { call, put, takeEvery } from 'redux-saga/effects';
import { UserApi } from '../../../services/api/UserApi';
import { LoadingState } from '../types';
import { setLoadingState, setUser, UserActionsType } from './actionCreators';
import { UserState } from './contracts/state';

export function* fetchUserRequest() {
  try {
    const items: UserState['items'] = yield call(UserApi.fetchUser);
    yield put(setUser(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* UserSaga() {
  yield takeEvery(UserActionsType.FETCH_User, fetchUserRequest);
}
