import { Action } from 'redux';
import { LoadingState } from '../types';
import { UserState } from './contracts/state';

export enum UserActionsType {
  SET_User = 'User/SET_User',
  FETCH_User = 'User/FETCH_User',
  SET_LOADING_STATE = 'User/SET_LOADING_STATE',
}

interface SetUserActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_User;
  payload: UserState['items'];
}

interface FetchUserActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_User;
}
interface SetLoadingStateInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const fetchUser = (): FetchUserActionInterface => ({
  type: UserActionsType.FETCH_User,
});

export const setUser = (payload: UserState['items']): SetUserActionInterface => ({
  type: UserActionsType.SET_User,
  payload,
});

export const setLoadingState = (payload: LoadingState): SetLoadingStateInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserActionInterface
  | FetchUserActionInterface
  | SetLoadingStateInterface;
