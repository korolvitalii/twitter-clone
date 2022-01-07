import { LoadingStatus, TweetInterface } from '../../../types';

export interface TweetsState {
  items: TweetInterface[];
  LoadingStatus: LoadingStatus;
  addTweetState: LoadingStatus;
}
