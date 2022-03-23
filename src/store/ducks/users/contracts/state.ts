import { LoadingStatus, UsersType } from '../../../types';

export interface UsersState {
  data: UsersType[] | undefined;
  status: LoadingStatus;
}
