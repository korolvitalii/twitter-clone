import axios from 'axios';
import { TweetsState } from '../../store.ts/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets: async () => {
    return await axios
      .get<TweetsState['items']>('https://trycode.pw/c/681RE.json')
      .then(({ data }) => data);
  },
};
