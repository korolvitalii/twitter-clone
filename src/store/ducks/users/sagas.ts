import { call, put, takeEvery } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/UserApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setUsers } from './actionCreators';
import { UsersActionsType } from './actionTypes';
import { UsersState } from './contracts/state';

export function* fetchUsersRequest() {
  try {
    const data: UsersState = yield call(UsersApi.fetchUsers);
    yield put(setUsers(data.data));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeEvery(UsersActionsType.FETCH_USERS, fetchUsersRequest);
}
