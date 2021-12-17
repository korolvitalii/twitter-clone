import { TweetInterface, TweetsState } from '../../store/ducks/tweets/contracts/state';
import { axios } from '../../core/axios';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  fetchTweets: async (): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetsState['items']>>('/tweets');
    return data.data;
  },
  fetchTweetData: async (id: string): Promise<TweetInterface[]> => {
    const { data } = await axios.get<Response<TweetInterface[]>>('/tweet/' + id);
    return data.data;
  },
  addTweet: async (payload: string): Promise<TweetInterface> => {
    const { data } = await axios.post<Response<TweetInterface>>('/tweet', { text: payload });
    return data.data;
  },
};
