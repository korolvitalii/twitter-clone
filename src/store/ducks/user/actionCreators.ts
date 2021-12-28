import { LoginFormData } from '../../../pages/SignIn/components/SignInModal';
import {
  AuthMeActionInterface,
  FetchSignInActionInterface,
  SetLoadingStatusInterface,
  SetUserDataActionInterface,
  UserActionsType,
} from './actionTypes';
import { UserState } from './contracts/state';

export const fetchSignIn = (data: LoginFormData): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload: {
    data,
  },
});

export const authMe = (): AuthMeActionInterface => ({
  type: UserActionsType.AUTH_ME,
});

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setLoadingStatus = (payload: UserState['status']): SetLoadingStatusInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});
