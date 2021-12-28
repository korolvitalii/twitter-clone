import { LoadingStatus, UserInterface } from '../../../types';

export interface UsersState {
  data: UserInterface[] | undefined;
  status: LoadingStatus;
}
