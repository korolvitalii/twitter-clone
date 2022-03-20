import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { UsersType } from './actionCreators';
import { UsersState } from './contracts/state';

export enum UsersActionsType {
  FETCH_USERS = 'USERS/FETCH_USERS',
  SET_LOADING_STATE = 'USERS/SET_LOADING_STATE',
  SET_USERS = 'USERS/SET_USERS',
}

export interface FetchUsersInterface extends Action<UsersActionsType> {
  type: UsersActionsType.FETCH_USERS;
}

export interface SetUsersActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_USERS;
  payload: UsersType[];
}

export interface SetLoadingStatusInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export type UsersActions =
  | SetUsersActionInterface
  | SetLoadingStatusInterface
  | FetchUsersInterface;
