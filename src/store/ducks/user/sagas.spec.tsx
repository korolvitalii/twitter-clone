import { runSaga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../../services/api/AuthApi';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { UsersApi } from '../../../services/api/UserApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setUserData, setUserTweets } from './actionCreators';
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

describe('userSaga', () => {
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

describe('userSaga > fetchSignInRequest ', () => {
  const formData = { payload: { email: 'test@test.com', password: 'qwerty12345' } };

  it('should call api and dispatch success action', async () => {
    const fetchUsersResponse = {
      status: 'success',
      data: {
        _id: '6236d5a5b626ed6ecec9d359',
        email: 'test@test.com',
        username: 'test',
        fullname: 'test',
        confirmed: false,
        password: 'asdasdas',
        confirmHash: 'string',
        createdAt: '2022-03-20T07:20:05.390Z',
        updatedAt: '2022-03-20T07:20:05.390Z',
        __v: 0,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMzZkNWE1YjYyNmVkNmVjZWM5ZDM1OSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdCIsImZ1bGxuYW1lIjoidGVzdCIsImNvbmZpcm1lZCI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsIl9fdiI6MH0sImlhdCI6MTY0Nzc4OTc2MSwiZXhwIjoxNjUwMzgxNzYxfQ.bltmVoRfEXRUqT99AtjxzA_Q3Xjyyoh8PqLCi_zgr_s',
      },
    };

    const request = jest
      .spyOn(AuthApi, 'signIn')
      .mockImplementation(() => Promise.resolve(fetchUsersResponse));

    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      // @ts-ignore
      fetchSignInRequest,
      formData,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setUserData(fetchUsersResponse.data)]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(AuthApi, 'signIn').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchSignInRequest,
      formData,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});

describe('userSaga > fetchUserTweetsRequest ', () => {
  const userId = '6236d5a5b626ed6ecec9d359';

  it('should call api and dispatch success action', async () => {
    const fetchUserTweetsResponse = {
      status: 'success',
      data: [
        {
          _id: '62372d02722ed412c4439593',
          text: 'First tweet.',
          user: {
            _id: '6236d5a5b626ed6ecec9d359',
            email: 'test@test.com',
            username: 'test',
            fullname: 'test',
            confirmed: false,
            createdAt: '2022-03-20T07:20:05.390Z',
            updatedAt: '2022-03-20T07:20:05.390Z',
            __v: 0,
          },
          images: [],
          createdAt: '2022-03-20T13:32:50.465Z',
          updatedAt: '2022-03-20T13:32:50.465Z',
          __v: 0,
          id: '62372d02722ed412c4439593',
        },
        {
          _id: '62372d0b722ed412c443959a',
          text: 'Second tweet.',
          user: {
            _id: '6236d5a5b626ed6ecec9d359',
            email: 'test@test.com',
            username: 'test',
            fullname: 'test',
            confirmed: false,
            createdAt: '2022-03-20T07:20:05.390Z',
            updatedAt: '2022-03-20T07:20:05.390Z',
            __v: 0,
          },
          images: [],
          createdAt: '2022-03-20T13:32:59.455Z',
          updatedAt: '2022-03-20T13:32:59.455Z',
          __v: 0,
          id: '62372d0b722ed412c443959a',
        },
      ],
    };

    const request = jest
      .spyOn(TweetsApi, 'fetchUserTweets')
      .mockImplementation(() => Promise.resolve(fetchUserTweetsResponse.data));

    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      // @ts-ignore
      fetchUserTweetsRequest,
      userId,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      setUserTweets(fetchUserTweetsResponse.data),
      setLoadingStatus(LoadingStatus.LOADED),
    ]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest
      .spyOn(TweetsApi, 'fetchUserTweets')
      .mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchUserTweetsRequest,
      userId,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});

describe('userSaga > fetchSignUpRequest ', () => {
  const registrationFormData = {
    payload: {
      data: {
        email: 'test1@test.com',
        fullname: 'TestFullname',
        username: 'TestUsername',
        password: 'testPassword',
        password2: 'testPassword',
      },
      type: UserActionsType.FETCH_SIGN_UP,
    },
  };

  it('should call api and dispatch success action', async () => {
    const signUpResponse = {
      status: 'success',
      data: {
        email: 'test1@test.com',
        username: 'TestFullname',
        fullname: 'TestUsername',
        confirmed: false,
        _id: '623827009a01afb71acfd567',
        createdAt: '2022-03-21T07:19:28.173Z',
        updatedAt: '2022-03-21T07:19:28.173Z',
        __v: 0,
      },
    };

    const request = jest
      .spyOn(AuthApi, 'signUp')
      .mockImplementation(() => Promise.resolve(signUpResponse));

    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchSignUpRequest,
      registrationFormData,
    );

    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.SUCCESS)]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(AuthApi, 'signUp').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchSignUpRequest,
      registrationFormData,
    );

    // expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});

describe('userSaga > fetchUserDataRequest ', () => {
  it('should call api and dispatch success action', async () => {
    const authMeResponse = {
      status: 'success',
      data: {
        _id: '6236d5a5b626ed6ecec9d359',
        email: 'test@test.com',
        username: 'test',
        fullname: 'test',
        confirmed: false,
        password: 'asdasdas',
        confirmHash: 'string',
        createdAt: '2022-03-20T07:20:05.390Z',
        updatedAt: '2022-03-20T07:20:05.390Z',
        __v: 0,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMzZkNWE1YjYyNmVkNmVjZWM5ZDM1OSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdCIsImZ1bGxuYW1lIjoidGVzdCIsImNvbmZpcm1lZCI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsIl9fdiI6MH0sImlhdCI6MTY0Nzc4OTc2MSwiZXhwIjoxNjUwMzgxNzYxfQ.bltmVoRfEXRUqT99AtjxzA_Q3Xjyyoh8PqLCi_zgr_s',
      },
    };

    const request = jest
      .spyOn(AuthApi, 'authMe')
      .mockImplementation(() => Promise.resolve(authMeResponse));

    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUserDataRequest,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      setLoadingStatus(LoadingStatus.LOADING),
      setUserData(authMeResponse.data),
    ]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(AuthApi, 'authMe').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUserDataRequest,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      setLoadingStatus(LoadingStatus.LOADING),
      setLoadingStatus(LoadingStatus.LOADED),
    ]);
    request.mockClear();
  });
});

describe('userSaga > updateUserData ', () => {
  let userData = {
    type: UserActionsType.UPDATE_USER_DATA,
    payload: {
      fullname: 'string',
      username: 'string',
      bigAvatar: 'string',
      smallAvatar: 'string',
    },
  };
  it('should call api and dispatch success action', async () => {
    const authMeResponse = {
      status: 'success',
      data: {
        _id: '6236d5a5b626ed6ecec9d359',
        email: 'test@test.com',
        username: 'test',
        fullname: 'test',
        confirmed: false,
        password: 'asdasdas',
        confirmHash: 'string',
        createdAt: '2022-03-20T07:20:05.390Z',
        updatedAt: '2022-03-20T07:20:05.390Z',
        __v: 0,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMzZkNWE1YjYyNmVkNmVjZWM5ZDM1OSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInVzZXJuYW1lIjoidGVzdCIsImZ1bGxuYW1lIjoidGVzdCIsImNvbmZpcm1lZCI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDMtMjBUMDc6MjA6MDUuMzkwWiIsIl9fdiI6MH0sImlhdCI6MTY0Nzc4OTc2MSwiZXhwIjoxNjUwMzgxNzYxfQ.bltmVoRfEXRUqT99AtjxzA_Q3Xjyyoh8PqLCi_zgr_s',
      },
    };

    const request = jest
      .spyOn(UsersApi, 'updateUserData')
      .mockImplementation(() => Promise.resolve(authMeResponse));

    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      updateUserData,
      userData,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.SUCCESS)]);
    request.mockClear();
  });
});
