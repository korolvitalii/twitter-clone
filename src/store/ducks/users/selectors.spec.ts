import { LoadingStatus } from '../../types';
import { selectUsersData, selectUsersState, selectUsersStatus } from './selectors';

describe('users selectrors', () => {
  let state = {
    tweets: {
      items: [
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
      LoadingStatus: LoadingStatus.LOADED,
      addTweetState: LoadingStatus.NEVER,
    },
    tweet: {
      LoadingStatus: LoadingStatus.NEVER,
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
      LoadingStatus: LoadingStatus.LOADED,
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
      status: LoadingStatus.SUCCESS,
    },
    users: {
      data: [
        {
          _id: '6236d5a5b626ed6ecec9d359',
          email: 'test@test.com',
          username: 'test',
          fullname: 'test',
          confirmed: false,
          createdAt: '2022-03-20T07:20:05.390Z',
          updatedAt: '2022-03-20T07:20:05.390Z',
        },
        {
          _id: '623827009a01afb71acfd567',
          email: 'korolvitalik@gmail.com',
          username: 'psyhologitech',
          fullname: 'korolvitalik',
          confirmed: false,
          createdAt: '2022-03-21T07:19:28.173Z',
          updatedAt: '2022-03-21T07:19:28.173Z',
        },
        {
          _id: '6239ff52e061ce592e7c1195',
          email: 'test1@test.com',
          username: 'test1',
          fullname: 'test1',
          confirmed: false,
          createdAt: '2022-03-22T16:54:42.604Z',
          updatedAt: '2022-03-22T16:54:42.604Z',
        },
      ],
      status: LoadingStatus.LOADED,
    },
    appication: {
      loadingStatus: true,
    },
  };
  describe('selectUsersState', () => {
    it('should return correct count items', () => {
      const result = selectUsersState(state);
      expect(result.data?.length).toBe(3);
    });
  });

  describe('selectUsersData', () => {
    it('should return correct count items', () => {
      const result = selectUsersData(state);
      expect(result?.length).toBe(3);
    });
  });

  describe('selectUserStatus', () => {
    it('should return correct status', () => {
      const result = selectUsersStatus(state);
      expect(result).toBe(LoadingStatus.LOADED);
    });
  });
});
