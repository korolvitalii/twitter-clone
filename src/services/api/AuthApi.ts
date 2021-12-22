import { axios } from '../../core/axios';
import { SignInFormInput } from '../../pages/SignIn/components/SignIn';

interface ResponseApi {
  status: string;
  data: any;
}

export const AuthApi = {
  authMe: async (userData: SignInFormInput): Promise<ResponseApi> => {
    const { data } = await axios.post<Promise<ResponseApi>>('/auth/signin', userData);
    return data;
  },
};
