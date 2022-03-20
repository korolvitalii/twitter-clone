import { takeEvery } from 'redux-saga/effects';
import { fetchTweetsRequest, tweetsSaga } from './sagas';
import { runSaga } from 'redux-saga';
import { LoadingStatus } from '../../types';
import { TweetsActionsType } from './actionsTypes';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { setLoadingStatus, setTweets } from './actionCreators';

describe('fetchTweetsFromApi', () => {
  const genObject = tweetsSaga();

  it('should wait for every FETCH_TWEETS action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('fetchTweetsRequest', () => {
  it('should call api and dispatch success action', async () => {
    const fetchTweetsResponse = [
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
    ];
    const request = jest
      .spyOn(TweetsApi, 'fetchTweets')
      .mockImplementation(() => Promise.resolve(fetchTweetsResponse));
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchTweetsRequest,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      setTweets(fetchTweetsResponse),
      setLoadingStatus(LoadingStatus.LOADED),
    ]);

    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(TweetsApi, 'fetchTweets').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchTweetsRequest,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});
