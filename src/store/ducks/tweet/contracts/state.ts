import { LoadingStatus, TweetInterface } from '../../../types';

export interface TweetState {
  item: TweetInterface | undefined;
  LoadingStatus: LoadingStatus;
}
