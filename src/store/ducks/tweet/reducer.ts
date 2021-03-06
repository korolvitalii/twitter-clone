import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetActions, TweetActionsType } from './actionsTypes';
import { TweetState } from './contracts/state';

const initialState: TweetState = {
  item: undefined,
  LoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, actions: TweetActions) => {
  switch (actions.type) {
    case TweetActionsType.SET_TWEET: {
      draft.item = actions.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    }
    case TweetActionsType.FETCH_TWEET: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TweetActionsType.REMOVE_TWEET: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TweetActionsType.FETCH_ADD_TWEET: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TweetActionsType.SET_LOADING_STATE: {
      draft.LoadingStatus = actions.payload;
      break;
    }
    case TweetActionsType.UPDATE_TWEET: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);
