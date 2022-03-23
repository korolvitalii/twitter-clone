import { UserState } from './ducks/user/contracts/state';

export enum LoadingStatus {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
}

export interface UserInterface {
  _id?: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  username: string;
  fullname: string;
  password: any;
  confirmed?: boolean;
  confirmHash: string;
  location?: string;
  about?: string;
  website?: string;
  token: string;
  bigAvatar?: string;
  smallAvatar?: string;
  __v?: number;
}

export interface TweetInterface {
  _id: string;
  id: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  images: string[];
  user?: UsersType;
  __v?: number;
}

export type UsersType = Omit<UserInterface, 'password' | 'confirmHash' | 'token'> | undefined;
