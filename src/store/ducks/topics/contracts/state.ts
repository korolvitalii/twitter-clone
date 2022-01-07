import { LoadingStatus } from '../../../types';

export interface TopicInterface {
  _id: string;
  topicName: string;
  content: string;
}

export interface TopicsState {
  items: TopicInterface[];
  LoadingStatus: LoadingStatus;
}
