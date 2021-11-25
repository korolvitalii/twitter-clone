import axios from 'axios';
import { TagsState } from '../../store/ducks/tags/contracts/state';

export const TagsApi = {
  fetchTags: async () => {
    return await axios.get<TagsState['items']>('/tags').then(({ data }) => data);
  },
};
