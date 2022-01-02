import { LoginFormData } from '../../../pages/SignIn/components/SignInModal';
import { RegistrationFormData } from '../../../pages/SignIn/components/SignUpModal';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  FetchUserDataActionInterface,
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

export const fetchSignUp = (data: RegistrationFormData): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload: {
    data,
  },
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setLoadingStatus = (payload: UserState['status']): SetLoadingStatusInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});
