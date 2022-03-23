import { LoadingStatus } from '../../types';
import { fetchTweets, removeTweets, setLoadingStatus, setTweets } from './actionCreators';
import { tweetsReducer } from './reducer';

describe('tweets reducers', () => {
  let state: any;

  const tweets = [
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

  it('setTweets should work correct', () => {
    const action = setTweets(tweets);
    const newState = tweetsReducer(state, action);
    expect(newState.items).toMatchObject(tweets);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADED);
  });

  it('fetchTweets should work correct', () => {
    const action = fetchTweets();
    const newState = tweetsReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });

  it('setLoadingStatus should work correct', () => {
    const action = setLoadingStatus(LoadingStatus.SUCCESS);
    const newState = tweetsReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.SUCCESS);
  });

  it('removeTweets should work correct', () => {
    const action = removeTweets();
    const newState = tweetsReducer(state, action);
    expect(newState.items.length).toBe(0);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });
});
