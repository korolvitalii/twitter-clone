import { axios } from '../../core/axios';

export interface updateUserDataPayloadInterface {
  fullname: string;
  username: string;
  bigAvatar?: string;
  smallAvatar?: string;
}

export const UsersApi = {
  fetchUser: async (id: string) => {
    return await axios.get(`/users/${id}`).then(({ data }) => data);
  },
  fetchUsers: async () => {
    return await axios.get(`/users/`).then(({ data }) => data);
  },
  updateUserData: async (payload: updateUserDataPayloadInterface) => {
    return await axios.patch(`/auth/update`, { user: payload }).then(({ data }) => data);
  },
};
