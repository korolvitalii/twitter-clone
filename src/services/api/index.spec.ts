import { axios } from '../../core/axios';
import { AuthApi } from './AuthApi';
import { TopicsApi } from './TopicsApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AuthApi', () => {
  describe('signIn', () => {
    const formData = { payload: { email: 'test@test.com', password: 'qwerty1234' } };
    describe('when API call is successful', () => {
      it('should return sign in response', async () => {
        const response = {
          data: {
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
          },
        };
        mockedAxios.post.mockResolvedValueOnce(response);
        const result = await AuthApi.signIn(formData.payload);
        expect(axios.post).toHaveBeenCalledWith('/auth/signin', formData.payload);
        expect(result).toEqual(response.data);
      });
    });
  });
  describe('signUp', () => {
    const formData = {
      email: 'test1@test.com',
      fullname: 'TestFullname',
      username: 'TestUsername',
      password: 'testPassword',
      password2: 'testPassword',
    };
    describe('when API call is successful', () => {
      it('should return signUp correct response', async () => {
        const response = {
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

        mockedAxios.post.mockResolvedValueOnce(response);
        const result = await AuthApi.signUp(formData);
        expect(axios.post).toHaveBeenCalledWith('/auth/signup', formData);
        expect(result).toEqual(response.data);
      });
    });
  });
  describe('authMe', () => {
    describe('when API call is successful', () => {
      it('should return authMe correct response', async () => {
        const response = {
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

        mockedAxios.get.mockResolvedValueOnce(response);
        const result = await AuthApi.authMe();
        expect(axios.get).toHaveBeenCalledWith('/users/me');
        expect(result).toEqual(response.data);
      });
    });
  });
});

describe('TopicsApi', () => {
  describe('fetchTopics', () => {
    describe('when API call is successful', () => {
      it('should return topics in response', async () => {
        const response = {
          data: {
            data: [
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
          },
        };
        mockedAxios.get.mockResolvedValueOnce(response);
        const result = await TopicsApi.fetchTopics();
        expect(axios.get).toHaveBeenCalledWith('/topics');
        expect(result).toEqual(response.data.data);
      });
    });
  });
});

describe('TweetsApi', () => {
  describe('fetchTweets', () => {
    describe('when API call is successful', () => {
      it('should return topics in response', async () => {
        const response = {
          data: {
            data: [
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
          },
        };
        mockedAxios.get.mockResolvedValueOnce(response);
        const result = await TopicsApi.fetchTopics();
        expect(axios.get).toHaveBeenCalledWith('/topics');
        expect(result).toEqual(response.data.data);
      });
    });
  });
});
