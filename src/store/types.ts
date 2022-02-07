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
}

export interface TweetInterface {
  _id: string;
  text: string;
  createdAt?: string;
  images: string[];
  user: {
    fullname: string;
    username: string;
    bigAvatar?: string;
    smallAvatar?: string;
  };
}
