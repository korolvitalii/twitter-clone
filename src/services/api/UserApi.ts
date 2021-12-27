import axios from 'axios';

export const UserApi = {
  fetchUser: async (id: string) => {
    return await axios.get(`/users/${id}`).then(({ data }) => data);
  },
};
