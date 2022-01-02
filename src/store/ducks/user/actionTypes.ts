import { Action } from 'redux';
import { LoginFormData } from '../../../pages/SignIn/components/SignInModal';
import { RegistrationFormData } from '../../../pages/SignIn/components/SignUpModal';
import { LoadingStatus } from '../../types';
import { UserState } from './contracts/state';

export enum UserActionsType {
  FETCH_SIGN_IN = 'USER/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'USER/FETCH_SIGN_UP',
  FETCH_USER_DATA = 'FETCH_USER_DATA',
  SET_LOADING_STATE = 'USER/SET_LOADING_STATE',
  SET_USER_DATA = 'USER/SET_USER_DATA',
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: {
    data: LoginFormData;
  };
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_UP;
  payload: {
    data: RegistrationFormData;
  };
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface SetLoadingStatusInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export type UserActions =
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | SetLoadingStatusInterface
  | FetchSignUpActionInterface
  | FetchUserDataActionInterface;