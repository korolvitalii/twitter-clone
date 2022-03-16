import { LoginFormData } from '../../../pages/SignIn/components/SignInModal';
import { RegistrationFormData } from '../../../pages/SignIn/components/SignUpModal';
import { updateUserDataPayloadInterface } from '../../../services/api/UserApi';
import { TweetsState } from '../tweets/contracts/state';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  FetchUserDataActionInterface,
  LogOutActionInterface,
  SetLoadingStatusInterface,
  SetUserDataActionInterface,
  UserActionsType,
  UpdateUserDataInterface,
  FetchUserTweetsInterface,
  SetUserTweetsActionInterface,
} from './actionTypes';
import { UserState } from './contracts/state';

export const fetchSignIn = (data: LoginFormData): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload: {
    data,
  },
});

export const fetchUserTweets = (): FetchUserTweetsInterface => ({
  type: UserActionsType.FETCH_USER_TWEETS,
});

export const setUserTweets = (payload: TweetsState['items']): SetUserTweetsActionInterface => ({
  type: UserActionsType.SET_USER_TWEETS,
  payload,
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

export const updateUserData = (data: updateUserDataPayloadInterface): UpdateUserDataInterface => ({
  type: UserActionsType.UPDATE_USER_DATA,
  payload: {
    data,
  },
});

export const logOut = (): LogOutActionInterface => ({
  type: UserActionsType.LOG_OUT,
});
