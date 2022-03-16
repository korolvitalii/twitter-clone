import { LoadingStatus } from '../../types';
import {
  FetchTweetsActionInterface,
  SetLoadingStatusInterface,
  SetTweetsActionInterface,
  TweetsActionsType,
  RemoveTweetsInterface,
} from './actionsTypes';
import { TweetsState } from './contracts/state';

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const removeTweets = (): RemoveTweetsInterface => ({
  type: TweetsActionsType.REMOVE_TWEETS,
});
