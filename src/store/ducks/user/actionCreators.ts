import { Action } from 'redux';
import { LoginFormData } from '../../../pages/SignIn/components/SignIn';
import { LoadingStatus } from '../../types';
import { UserState } from './contracts/state';

export enum UserActionsType {
  FETCH_SIGN_IN = 'USER/FETCH_SIGN_IN',
  SET_LOADING_STATE = 'USER/SET_LOADING_STATE',
  SET_USER_DATA = 'SET_USER_DATA',
}

interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: {
    data: LoginFormData;
  };
}
interface SetLoadingStatusInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export const fetchSignIn = (data: LoginFormData): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload: {
    data,
  },
});

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setLoadingStatus = (payload: UserState['status']): SetLoadingStatusInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | SetLoadingStatusInterface;
