import { LoadingStatus } from '../../../types';

export interface UserInterface {
  _id?: string;
  email: string;
  username: string;
  fullname: string;
  password: any;
  confirmed?: boolean;
  confirmHash: string;
  location?: string;
  about?: string;
  website?: string;
  token: string;
}

export interface UserState {
  data: UserInterface | undefined;
  status: LoadingStatus;
}
