import axios from 'axios';
import { TopicInterface, TopicsState } from '../../store/ducks/topics/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TopicsApi = {
  fetchTopics: async (): Promise<TopicInterface[]> => {
    const { data } = await axios.get<Response<TopicsState['items']>>('/topics');
    return data.data;
  },
};
