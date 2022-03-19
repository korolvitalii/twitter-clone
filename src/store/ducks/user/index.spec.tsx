import { takeEvery } from 'redux-saga/effects';
import { UserActionsType } from './actionTypes';
import {
  userSaga,
  fetchSignInRequest,
  fetchSignUpRequest,
  fetchUserDataRequest,
  logOut,
  fetchUserTweetsRequest,
  updateUserData,
} from './sagas';

describe('fetchAuthorsFromApi', () => {
  const genObject = userSaga();

  it('should wait for every FETCH_SIGN_IN action and call fetchSignInRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest),
    );
  });

  it('should wait for every FETCH_SIGN_UP action and call fetchSignUpRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest),
    );
  });

  it('should wait for every FETCH_SIGN_IN action and call fetchUserDataRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest),
    );
  });

  it('should wait for every LOG_OUT action and call logOut', () => {
    expect(genObject.next().value).toEqual(takeEvery(UserActionsType.LOG_OUT, logOut));
  });

  it('should wait for every UPDATE_USER_DATA action and call updateUserData', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UserActionsType.UPDATE_USER_DATA, updateUserData),
    );
  });

  it('should wait for every FETCH_USER_TWEETS action and call fetchUserTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UserActionsType.FETCH_USER_TWEETS, fetchUserTweetsRequest),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
