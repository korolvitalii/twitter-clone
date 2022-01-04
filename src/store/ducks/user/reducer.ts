import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UserActions, UserActionsType } from './actionTypes';
import { UserState } from './contracts/state';

const initialState: UserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
  registered: false,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA: {
      draft.data = action.payload;
      draft.status = LoadingStatus.SUCCESS;
      break;
    }
    case UserActionsType.SET_LOADING_STATE: {
      draft.status = action.payload;
      break;
    }
    case UserActionsType.FETCH_SIGN_IN: {
      draft.status = LoadingStatus.LOADING;
      break;
    }
    case UserActionsType.FETCH_SIGN_UP: {
      draft.status = LoadingStatus.LOADING;
      break;
    }
    case UserActionsType.LOG_OUT: {
      draft.status = LoadingStatus.LOADING;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
