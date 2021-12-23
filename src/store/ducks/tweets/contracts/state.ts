import { LoadingState } from '../../types';

export interface TweetInterface {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: TweetInterface[];
  loadingState: LoadingState;
  addTweetState: LoadingState;
}
