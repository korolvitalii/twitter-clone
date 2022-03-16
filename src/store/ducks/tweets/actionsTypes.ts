import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TweetsState } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'TWEETS/SET_TWEETS',
  FETCH_TWEETS = 'TWEETS/FETCH_TWEETS',
  SET_LOADING_STATE = 'TWEETS/SET_LOADING_STATE',
  REMOVE_TWEETS = 'TWEETS/REMOVE_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetLoadingStatusInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface RemoveTweetsInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.REMOVE_TWEETS;
}

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetLoadingStatusInterface
  | RemoveTweetsInterface;
