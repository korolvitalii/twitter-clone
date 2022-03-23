import { call, put, takeEvery } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/UserApi';
import { LoadingStatus, UsersType } from '../../types';
import { setLoadingStatus, setUsers } from './actionCreators';
import { UsersActionsType } from './actionTypes';

export function* fetchUsersRequest() {
  try {
    const data: UsersType[] = yield call(UsersApi.fetchUsers);
    yield put(setUsers(data));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeEvery(UsersActionsType.FETCH_USERS, fetchUsersRequest);
}
