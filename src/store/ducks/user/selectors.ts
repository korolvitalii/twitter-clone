import { AppStateType } from '../../rootReducer';
import { LoadingStatus } from '../../types';
import { UserState } from './contracts/state';

export const selectUserState = (state: AppStateType): UserState => state.user;

export const selectUserData = (state: AppStateType): UserState['data'] =>
  selectUserState(state).data;

export const selectUserStatus = (state: AppStateType): UserState['status'] =>
  selectUserState(state).status;

export const selectIsAuth = (state: AppStateType): boolean =>
  selectUserStatus(state) === LoadingStatus.SUCCESS;
