import { UserInterface, UsersType } from '../../types';
import {
  FetchUsersInterface,
  SetLoadingStatusInterface,
  SetUsersActionInterface,
  UsersActionsType,
} from './actionTypes';
import { UsersState } from './contracts/state';

export const fetchUsers = (): FetchUsersInterface => ({
  type: UsersActionsType.FETCH_USERS,
});

export const setUsers = (payload: UsersType[]): SetUsersActionInterface => ({
  type: UsersActionsType.SET_USERS,
  payload,
});

export const setLoadingStatus = (payload: UsersState['status']): SetLoadingStatusInterface => ({
  type: UsersActionsType.SET_LOADING_STATE,
  payload,
});
