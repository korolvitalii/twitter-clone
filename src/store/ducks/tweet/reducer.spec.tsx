import { LoadingStatus } from '../../types';
import {
  fetchAddTweet,
  fetchTweet,
  removeTweet,
  setLoadingStatus,
  setTweet,
  updateTweet,
} from './actionCreators';
import { tweetReducer } from './reducer';

describe('tweet reducers', () => {
  let state: any;

  const tweet = {
    _id: '623dfd98982de53cec2dc92d',
    text: '555',
    user: {
      _id: '6239ff52e061ce592e7c1195',
      email: 'test1@test.com',
      username: 'test1',
      fullname: 'test1',
      confirmed: false,
      createdAt: '2022-03-22T16:54:42.604Z',
      updatedAt: '2022-03-22T16:54:42.604Z',
      __v: 0,
    },
    images: [],
    createdAt: '2022-03-25T17:36:24.727Z',
    updatedAt: '2022-03-25T17:36:24.727Z',
    __v: 0,
    id: '623dfd98982de53cec2dc92d',
  };
  const tweetId = '623dfd98982de53cec2dc92d';

  beforeEach(() => {
    state = {
      data: undefined,
      userTweets: [],
      status: 'LOADED',
    };
  });

  it('setTweet should work correct', () => {
    const action = setTweet(tweet);
    const newState = tweetReducer(state, action);
    expect(newState.item).toMatchObject(tweet);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADED);
  });

  it('fetchTweets should work correct', () => {
    const action = fetchTweet(tweetId);
    const newState = tweetReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });

  it('removeTweet should work correct', () => {
    const action = removeTweet(tweetId);
    const newState = tweetReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });

  it('fetchAddTweet should work correct', () => {
    const payload = { images: ['asdas', 'asdasd'], text: 'asdas' };
    const action = fetchAddTweet(payload);
    const newState = tweetReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });

  it('setLoadingStatus should work correct', () => {
    const action = setLoadingStatus(LoadingStatus.SUCCESS);
    const newState = tweetReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.SUCCESS);
  });

  it('updateTweet should work correct', () => {
    const action = updateTweet('623dfd98982de53cec2dc92d', 'update tweet text');
    const newState = tweetReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });
});
