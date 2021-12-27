import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UserActionsType, UserActions } from './actionCreators';
import { UserState } from './contracts/state';

const initialState: UserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA: {
      draft.data = action.payload;
      draft.status = LoadingStatus.LOADING;
      break;
    }
    case UserActionsType.SET_LOADING_STATE: {
      draft.status = action.payload;
      break;
    }
    case UserActionsType.FETCH_SIGN_IN: {
      draft.status = LoadingStatus.SUCCESS;
      break;
    }

    default: {
      return draft;
    }
  }
}, initialState);
