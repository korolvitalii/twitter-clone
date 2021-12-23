import axios from 'axios';
import { TopicsState } from '../../store/ducks/topics/contracts/state';

export const UserApi = {
  fetchUser: async () => {
    return await axios.get<TopicsState['items']>('/tags').then(({ data }) => data);
  },
};
