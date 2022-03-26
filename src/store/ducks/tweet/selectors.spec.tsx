import { LoadingStatus } from '../../types';
import { selectTweet, selectLoadingStatus, selectIsLoading, selectIsLoaded } from './selectors';

describe('users selectrors', () => {
  let state = {
    tweets: {
      items: [
        {
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
        },
        {
          _id: '623dfc77982de53cec2dc8fe',
          text: '123',
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
          createdAt: '2022-03-25T17:31:35.406Z',
          updatedAt: '2022-03-25T17:31:35.406Z',
          __v: 0,
          id: '623dfc77982de53cec2dc8fe',
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
      ],
      LoadingStatus: 'LOADED',
    },
    tweet: {
      item: {
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
      },
      LoadingStatus: 'LOADED',
    },
    topics: {
      items: [
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
      ],
      LoadingStatus: 'LOADED',
    },
    user: {
      data: {
        _id: '6239ff52e061ce592e7c1195',
        email: 'test1@test.com',
        username: 'test1',
        fullname: 'test1',
        confirmed: false,
        createdAt: '2022-03-22T16:54:42.604Z',
        updatedAt: '2022-03-22T16:54:42.604Z',
        __v: 0,
      },
      userTweets: [],
      status: 'SUCCESS',
    },
    users: {
      status: 'NEVER',
    },
    appication: {
      loadingStatus: true,
    },
  };
  describe('selectTweet', () => {
    it('should return correct count items', () => {
      const result = selectTweet(state);
      expect(result.item).toMatchObject(state.tweet.item);
    });
  });

  describe('selectLoadingStatus', () => {
    it('should return correct count items', () => {
      const result = selectLoadingStatus(state);
      expect(result).toBe(LoadingStatus.LOADED);
    });
  });

  describe('selectIsLoading', () => {
    it('should return correct status', () => {
      const result = selectIsLoading(state);
      expect(result).toBeFalsy();
    });
  });

  describe('selectIsLoaded', () => {
    it('should return correct status', () => {
      const result = selectIsLoaded(state);
      expect(result).toBeTruthy();
    });
  });
});
