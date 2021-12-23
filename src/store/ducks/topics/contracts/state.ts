import { LoadingState } from '../../types';

export interface TopicInterface {
  _id: string;
  name: string;
  count: number;
}

export interface TopicsState {
  items: TopicInterface[];
  loadingState: LoadingState;
}
