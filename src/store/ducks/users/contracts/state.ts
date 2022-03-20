import { LoadingStatus, UserInterface } from '../../../types';
import { UsersType } from '../actionCreators';

export interface UsersState {
  data: UsersType[] | undefined;
  status: LoadingStatus;
}
