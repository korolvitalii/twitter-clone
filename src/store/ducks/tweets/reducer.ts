import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { TweetsActions, TweetsActionsType } from './actionsTypes';
import { TweetsState } from './contracts/state';

const initialState: TweetsState = {
  items: [],
  LoadingStatus: LoadingStatus.NEVER,
  addTweetState: LoadingStatus.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, actions: TweetsActions) => {
  switch (actions.type) {
    case TweetsActionsType.SET_TWEETS: {
      draft.items = actions.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    }

    case TweetsActionsType.FETCH_TWEETS: {
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }
    case TweetsActionsType.SET_LOADING_STATE: {
      draft.LoadingStatus = actions.payload;
      break;
    }
    case TweetsActionsType.REMOVE_TWEETS: {
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    }

    default: {
      return draft;
    }
  }
}, initialState);
