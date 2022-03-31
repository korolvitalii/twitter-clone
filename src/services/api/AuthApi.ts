import { axios } from '../../core/axios';
import { LoginFormData } from '../../pages/SignIn/components/SignInModal';
import { RegistrationFormData } from '../../pages/SignIn/components/SignUpModal';
import { Response, UsersType } from '../../store/types';

export const AuthApi = {
  signIn: async (userData: LoginFormData): Promise<UsersType> => {
    const { data } = await axios.post<UsersType>('/auth/signin', userData);
    return data;
  },
  signUp: async (userData: RegistrationFormData): Promise<Response<UsersType>> => {
    const { data } = await axios.post<Response<UsersType>>('/auth/signup', userData);
    return data;
  },
  authMe: async (): Promise<Response<UsersType>> => {
    const { data } = await axios.get<Response<UsersType>>('/users/me');
    return data;
  },
};
