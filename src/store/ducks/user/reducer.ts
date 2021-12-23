import produce, { Draft } from 'immer';
import { LoadingState } from '../types';
import { UserActionsType, UserActions } from './actionCreators';
import { UserState } from './contracts/state';

const initialState: UserState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const UserReducer = produce((draft: Draft<UserState>, actions: UserActions) => {
  switch (actions.type) {
    case UserActionsType.SET_User: {
      draft.items = actions.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case UserActionsType.FETCH_User: {
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case UserActionsType.SET_LOADING_STATE: {
      draft.loadingState = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
