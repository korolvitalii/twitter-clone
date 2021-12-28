import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { UsersActions, UsersActionsType } from './actionTypes';
import { UsersState } from './contracts/state';

const initialState: UsersState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionsType.FETCH_USERS: {
      draft.status = LoadingStatus.LOADING;
      break;
    }
    case UsersActionsType.SET_USERS: {
      draft.data = action.payload;
      draft.status = LoadingStatus.LOADED;
      break;
    }
    case UsersActionsType.SET_LOADING_STATE: {
      draft.status = action.payload;
      break;
    }

    default: {
      return draft;
    }
  }
}, initialState);
