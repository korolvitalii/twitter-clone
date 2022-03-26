import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { LoadingStatus } from '../../types';
import { fetchTopicsRequest, topicsSaga } from './sagas';
import { setLoadingStatus, setTopics } from './actionCreators';
import { TopicInterface } from './contracts/state';
import { TopicsApi } from '../../../services/api/TopicsApi';
import { TopicsActionsType } from './actionTypes';

describe('fetchTopicsFromApi', () => {
  const genObject = topicsSaga();

  it('should wait for every FETCH_TOPICS action and call fetchTweetsRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(TopicsActionsType.FETCH_TOPICS, fetchTopicsRequest),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('fetchTopicsRequest', () => {
  it('should call api and dispatch success action', async () => {
    const fetchTopicsResponse: TopicInterface[] = [
      {
        _id: '61d7f4dee4e75ec0419fd6fa',
        topicName: 'Sports · Trending',
        content: 'Rossi',
      },
      {
        _id: '61d7f4dee4e73ec0411fd6fa',
        topicName: 'Sports · Trending',
        content: 'Facebooka',
      },
      {
        _id: '61d7f4dee4e73ec0415fd6fa',
        topicName: 'Trending in Poland',
        content: 'Huberta',
      },
      {
        _id: '61d7f4dee4e73ec0419fd3fa',
        topicName: 'Trending in Poland',
        content: 'Rossi',
      },
      {
        _id: '61d7f4dee4e73ec0419fd62a',
        topicName: 'Trending in Poland',
        content: 'Marcus',
      },
    ];
    const request = jest
      .spyOn(TopicsApi, 'fetchTopics')
      .mockImplementation(() => Promise.resolve(fetchTopicsResponse));
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchTopicsRequest,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setTopics(fetchTopicsResponse)]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(TopicsApi, 'fetchTopics').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchTopicsRequest,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});
