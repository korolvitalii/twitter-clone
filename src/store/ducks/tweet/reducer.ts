import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetActions, TweetActionsType } from './actionCreators';
import { TweetState } from './contracts/state';

const initialState: TweetState = {
  items: undefined,
  LoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, actions: TweetActions) => {
  switch (actions.type) {
    case TweetActionsType.SET_TWEET: {
      draft.items = actions.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    }
    case TweetActionsType.FETCH_TWEET: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TweetActionsType.SET_LOADING_STATE: {
      draft.LoadingStatus = actions.payload;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
