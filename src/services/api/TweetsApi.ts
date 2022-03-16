import { TweetsState } from '../../store/ducks/tweets/contracts/state';
import { axios } from '../../core/axios';
import { TweetInterface } from '../../store/types';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetsState['items']>>('/tweets');
    return data.data;
  },
  fetchUserTweets: async (userId?: string): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetsState['items']>>(`/tweets/user/${userId}`);
    return data.data;
  },
  fetchTweetData: async (id: string): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetInterface[]>>('/tweet/' + id);
    return data.data;
  },
  addTweet: async (payload: { text: string; images: string[] }): Promise<TweetInterface> => {
    const { data } = await axios.post<Response<TweetInterface>>('/tweet', payload);

    return data.data;
  },
  removeTweet: async (payload: string): Promise<TweetInterface> => {
    const { data } = await axios.delete<Response<TweetInterface>>(`/tweet/${payload}`);
    return data.data;
  },
  updateTweet: async (payload: {
    tweetId: string | undefined;
    text: string;
  }): Promise<TweetInterface> => {
    const { data } = await axios.patch<Response<TweetInterface>>(`/tweet/${payload.tweetId}`, {
      text: payload.text,
    });
    return data.data;
  },
};
