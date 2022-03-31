import { axios } from '../../core/axios';
import { UsersType } from '../../store/types';

export interface updateUserDataPayloadInterface {
  fullname: string;
  username: string;
  bigAvatar?: string;
  smallAvatar?: string;
}

export const UsersApi = {
  fetchUser: async (id: string): Promise<UsersType> => {
    const { data } = await axios.get<UsersType>(`/users/${id}`);
    return data;
  },
  fetchUsers: async (): Promise<UsersType[]> => {
    const { data } = await axios.get<UsersType[]>(`/users/`);
    return data;
  },
  updateUserData: async (payload: updateUserDataPayloadInterface): Promise<UsersType> => {
    const { data } = await axios.patch<UsersType>(`/auth/update`, { user: payload });
    return data;
  },
};
