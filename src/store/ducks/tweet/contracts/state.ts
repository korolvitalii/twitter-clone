export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

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
