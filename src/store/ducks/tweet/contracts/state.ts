import { LoadingStatus, TweetInterface } from '../../../types';

export interface TweetState {
  items: TweetInterface | undefined;
  LoadingStatus: LoadingStatus;
}
