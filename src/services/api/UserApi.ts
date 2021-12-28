import { axios } from '../../core/axios';

export const UsersApi = {
  fetchUser: async (id: string) => {
    return await axios.get(`/users/${id}`).then(({ data }) => data);
  },
  fetchUsers: async () => {
    return await axios.get(`/users/`).then(({ data }) => data);
  },
};
