import axios from 'axios';
import { TweetInterface, TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async () => {
    return await axios.get<TweetsState['items']>('/tweets').then(({ data }) => data);
  },
  fetchTweetData: async (id: string) => {
    return await axios.get<TweetInterface[]>('/tweets?_id=' + id).then(({ data }) => data[0]);
  },
  addTweet: async (payload: TweetInterface) => {
    return await axios.post<TweetInterface>('/tweets', payload).then(({ data }) => data);
  },
};
