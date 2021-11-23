import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addTweetState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, actions: TweetsActions) => {
  switch (actions.type) {
    case TweetsActionsType.SET_TWEETS: {
      draft.items = actions.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case TweetsActionsType.ADD_TWEET: {
      draft.items.splice(0, 0, actions.payload);
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case TweetsActionsType.FETCH_TWEETS: {
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case TweetsActionsType.SET_LOADING_STATE: {
      draft.loadingState = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
