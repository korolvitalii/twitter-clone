import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TweetState } from './contracts/state';

export enum TweetActionsType {
  SET_TWEET = 'tweets/SET_TWEET',
  REMOVE_TWEET = 'tweets/REMOVE_TWEET',
  UPDATE_TWEET = 'tweets/UPDATE_TWEET',
  FETCH_TWEET = 'tweets/FETCH_TWEET',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET;
  payload: TweetState['items'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET;
  payload: string;
}

export interface SetLoadingStatusInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface RemoveTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.REMOVE_TWEET;
  payload: string;
}

export interface UpdateTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.UPDATE_TWEET;
  payload: string;
}

export type TweetActions =
  | SetTweetActionInterface
  | FetchTweetActionInterface
  | SetLoadingStatusInterface
  | RemoveTweetActionInterface
  | UpdateTweetActionInterface;
