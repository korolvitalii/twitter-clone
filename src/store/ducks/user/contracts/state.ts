import { LoadingStatus, UserInterface } from '../../../types';

export interface UserState {
  data: UserInterface | undefined;
  status: LoadingStatus;
  registered: false;
}
