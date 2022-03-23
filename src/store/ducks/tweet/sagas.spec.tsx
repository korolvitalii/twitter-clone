import { takeEvery } from 'redux-saga/effects';
import {
  fetchTweetRequest,
  removeTweetRequest,
  updateTweetRequest,
  fetchAddTweetRequest,
  tweetSaga,
} from './sagas';
import { runSaga } from 'redux-saga';
import { LoadingStatus, TweetInterface } from '../../types';
import { TweetActionsType } from './actionsTypes';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { setLoadingStatus, setTweet } from './actionCreators';
import { TweetState } from './contracts/state';

describe('fetchTweetFromApi', () => {
  const genObject = tweetSaga();

  it('should wait for every FETCH_TWEETS action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest),
    );
  });

  it('should wait for every FETCH_ADD_TWEET action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest),
    );
  });

  it('should wait for every REMOVE_TWEET action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TweetActionsType.REMOVE_TWEET, removeTweetRequest),
    );
  });

  it('should wait for every UPDATE_TWEET action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TweetActionsType.UPDATE_TWEET, updateTweetRequest),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('fetchTweetRequest', () => {
  it('should call api and dispatch success action', async () => {
    const tweetId = '6239e912e061ce592e7c1181';
    const fetchTweetResponse: TweetInterface = {
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
    };
    const request = jest
      .spyOn(TweetsApi, 'fetchTweetData')
      .mockImplementation(() => Promise.resolve(fetchTweetResponse));
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchTweetRequest,
      tweetId,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      setTweet(fetchTweetResponse),
      setLoadingStatus(LoadingStatus.LOADED),
    ]);

    request.mockClear();
  });

  //   it('should call api and dispatch error action', async () => {
  //     const request = jest.spyOn(TweetsApi, 'fetchTweets').mockImplementation(() => Promise.reject());
  //     const dispatched: any[] = [];
  //     const result = await runSaga(
  //       {
  //         dispatch: (action) => dispatched.push(action),
  //       },
  //       //@ts-ignore
  //       fetchTweetsRequest,
  //     );

  //     expect(request).toHaveBeenCalledTimes(1);
  //     expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
  //     request.mockClear();
  //   });
});
