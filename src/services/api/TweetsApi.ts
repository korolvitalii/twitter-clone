import axios from 'axios';
import { TweetInterface, TweetsState } from '../../store/ducks/tweets/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetsState['items']>>('/tweet');
    return data.data;
  },
  fetchTweetData: async (id: string): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetInterface[]>>('/tweet/' + id);
    return data.data;
  },
  addTweet: async (payload: TweetInterface): Promise<TweetInterface> => {
    const { data } = await axios.post<Response<TweetInterface>>('/tweet', payload);
    return data.data;
  },
};
