import { LoadingState } from '../../types';

export interface TweetInterface {
  _id?: string;
  text: string;
  createdAt?: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetState {
  items: TweetInterface | undefined;
  loadingState: LoadingState;
}
