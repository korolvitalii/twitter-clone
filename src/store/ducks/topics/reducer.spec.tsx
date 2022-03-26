import { LoadingStatus } from '../../types';
import { fetchTopics, setLoadingStatus, setTopics } from './actionCreators';
import { TopicInterface } from './contracts/state';
import { topicsReducer } from './reducer';

describe('topic reducer', () => {
  let state: any;
  const topics: TopicInterface[] = [
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

  beforeEach(() => {
    state = {
      items: [],
      status: LoadingStatus.NEVER,
    };
  });

  it('fetchTopics should work correct', () => {
    const action = fetchTopics();
    const newState = topicsReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADING);
  });

  it('setTopics should work correct', () => {
    const action = setTopics(topics);
    const newState = topicsReducer(state, action);
    expect(newState.items.length).toBe(5);
    expect(newState.items).toMatchObject(topics);
    expect(newState.LoadingStatus).toBe(LoadingStatus.LOADED);
  });

  it('setLoadingStatus should work correct', () => {
    const action = setLoadingStatus(LoadingStatus.SUCCESS);
    const newState = topicsReducer(state, action);
    expect(newState.LoadingStatus).toBe(LoadingStatus.SUCCESS);
  });
});
