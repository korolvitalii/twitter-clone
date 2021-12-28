import { AppStateType } from '../../rootReducer';
import { UsersState } from './contracts/state';

export const selectUsersState = (state: AppStateType): UsersState => state.users;

export const selectUsersData = (state: AppStateType): UsersState['data'] =>
  selectUsersState(state).data;

export const selectUsersStatus = (state: AppStateType): UsersState['status'] =>
  selectUsersState(state).status;
