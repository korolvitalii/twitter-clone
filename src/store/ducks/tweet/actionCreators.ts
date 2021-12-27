import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TweetInterface, TweetState } from './contracts/state';

export enum TweetActionsType {
  SET_TWEET = 'tweets/SET_TWEET',
  FETCH_TWEET = 'tweets/FETCH_TWEET',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET;
  payload: TweetState['items'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET;
  payload: string;
}

interface SetLoadingStatusInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export const fetchTweet = (tweetId: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_TWEET,
  payload: tweetId,
});

export const setTweet = (payload: TweetInterface | undefined): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET,
  payload,
});

export const SetLoadingStatus = (payload: LoadingStatus): SetLoadingStatusInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export type TweetActions =
  | SetTweetActionInterface
  | FetchTweetActionInterface
  | SetLoadingStatusInterface;
