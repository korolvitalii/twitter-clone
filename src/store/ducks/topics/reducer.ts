import produce, { Draft } from 'immer';
import { LoadingState } from '../types';
import { TopicsActionsType, TopicsActions } from './actionCreators';
import { TopicsState } from './contracts/state';

const initialState: TopicsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const topicsReducer = produce((draft: Draft<TopicsState>, actions: TopicsActions) => {
  switch (actions.type) {
    case TopicsActionsType.SET_Topics: {
      draft.items = actions.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case TopicsActionsType.FETCH_Topics: {
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case TopicsActionsType.SET_LOADING_STATE: {
      draft.loadingState = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
