import produce, { Draft } from 'immer';
import { TagsActionsType, TagsActions } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';

const initialState: TagsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce((draft: Draft<TagsState>, actions: TagsActions) => {
  switch (actions.type) {
    case TagsActionsType.SET_TAGS: {
      draft.items = actions.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case TagsActionsType.FETCH_TAGS: {
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case TagsActionsType.SET_LOADING_STATE: {
      draft.loadingState = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
