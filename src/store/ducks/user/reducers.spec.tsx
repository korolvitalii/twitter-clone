import { LoadingStatus } from '../../types';
import {
  fetchSignIn,
  fetchSignUp,
  logOut,
  setLoadingStatus,
  setUserData,
  setUserTweets,
  updateUserData,
} from './actionCreators';
import { UserState } from './contracts/state';
import { userReducer } from './reducer';

describe('user reducers', () => {
  let state: any;
  const userData: UserState['data'] = {
    _id: '6236d5a5b626ed6ecec9d359',
    email: 'test@test.com',
    username: 'test',
    fullname: 'test',
    confirmed: false,
    createdAt: '2022-03-20T07:20:05.390Z',
    password: 'test',
    token: 'test',
    confirmHash: 'test',
  };

  const userTweets = [
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
    {
      _id: '6239e90fe061ce592e7c117a',
      text: 'ttt',
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
      createdAt: '2022-03-22T15:19:43.163Z',
      updatedAt: '2022-03-22T15:19:43.163Z',
      __v: 0,
      id: '6239e90fe061ce592e7c117a',
    },
    {
      _id: '6239e912e061ce592e7c1181',
      text: 'ffff',
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
      createdAt: '2022-03-22T15:19:46.866Z',
      updatedAt: '2022-03-22T15:19:46.866Z',
      __v: 0,
      id: '6239e912e061ce592e7c1181',
    },
  ];

  beforeEach(() => {
    state = {
      data: undefined,
      userTweets: [],
      status: 'LOADED',
    };
  });
  it('setUserData should work correct', () => {
    const action = setUserData(userData);
    const newState = userReducer(state, action);
    expect(newState.data).toMatchObject(userData);
  });

  it('setUserTweets should work correct', () => {
    const action = setUserTweets(userTweets);
    const newState = userReducer(state, action);
    expect(newState.userTweets).toMatchObject(userTweets);
  });

  it('setLoadingState should work correct', () => {
    const action = setLoadingStatus(LoadingStatus.LOADED);
    const newState = userReducer(state, action);
    expect(newState.status).toBe('LOADED');
  });

  it('fetchSignIn should work correct', () => {
    const formData = { payload: { email: 'test@test.com', password: 'qwerty12345' } };
    const action = fetchSignIn(formData.payload);
    const newState = userReducer(state, action);
    expect(newState.status).toBe('LOADING');
  });

  it('fetchSignUp should work correct', () => {
    const registrationFormData = {
      email: 'test1@test.com',
      fullname: 'TestFullname',
      username: 'TestUsername',
      password: 'testPassword',
      password2: 'testPassword',
    };
    const action = fetchSignUp(registrationFormData);
    const newState = userReducer(state, action);
    expect(newState.status).toBe('LOADING');
  });

  it('logOut should work correct', () => {
    const action = logOut();
    const newState = userReducer(state, action);
    expect(newState.status).toBe('LOADED');
    expect(newState.data).toBeUndefined();
  });

  it('updateUserData should work correct', () => {
    const userData = {
      fullname: 'string',
      username: 'string',
      bigAvatar: 'string',
      smallAvatar: 'string',
    };
    const action = updateUserData(userData);
    const newState = userReducer(state, action);
    expect(newState.status).toBe('LOADING');
  });
});
