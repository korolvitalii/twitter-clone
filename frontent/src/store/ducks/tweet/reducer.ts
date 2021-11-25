import produce, { Draft } from 'immer';
import { TweetActions, TweetActionsType } from './actionCreators';
import { LoadingState, TweetState } from './contracts/state';

const initialState: TweetState = {
  items: undefined,
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, actions: TweetActions) => {
  switch (actions.type) {
    case TweetActionsType.SET_TWEET: {
      draft.items = actions.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    }
    case TweetActionsType.FETCH_TWEET: {
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case TweetActionsType.SET_LOADING_STATE: {
      draft.loadingState = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
