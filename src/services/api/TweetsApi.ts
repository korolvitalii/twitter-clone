import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async () => {
    return await axios.get<TweetsState['items']>('/tweets').then(({ data }) => data);
  },
};
