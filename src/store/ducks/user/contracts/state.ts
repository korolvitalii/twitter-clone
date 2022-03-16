import { LoadingStatus, UserInterface } from '../../../types';
import { TweetsState } from '../../tweets/contracts/state';

export interface UserState {
  data: UserInterface | undefined;
  userTweets: [] | TweetsState['items'];
  status: LoadingStatus;
  registered: false;
}
