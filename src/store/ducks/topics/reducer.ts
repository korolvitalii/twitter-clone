import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TopicsActionsType, TopicsActions } from './actionCreators';
import { TopicsState } from './contracts/state';

const initialState: TopicsState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
};

export const topicsReducer = produce((draft: Draft<TopicsState>, actions: TopicsActions) => {
  switch (actions.type) {
    case TopicsActionsType.SET_TOPICS: {
      draft.items = actions.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    }
    case TopicsActionsType.FETCH_Topics: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TopicsActionsType.SET_LOADING_STATE: {
      draft.LoadingStatus = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
