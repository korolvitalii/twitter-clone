import { axios } from '../../core/axios';
import { LoginFormData } from '../../pages/SignIn/components/SignInModal';

interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  signIn: async (userData: LoginFormData): Promise<ResponseApi> => {
    const { data } = await axios.post<ResponseApi>('/auth/signin', userData);
    return data;
  },
  authMe: async (): Promise<ResponseApi> => {
    const { data } = await axios.get<ResponseApi>('/users/me');
    return data;
  },
};
