import { Action } from 'redux';
import { LoadingState, TweetInterface, TweetsState } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = '/tweets/ADD_TWEET',
}

interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

interface SetLoadingStateInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: TweetInterface;
}

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: TweetInterface): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const setLoadingState = (payload: LoadingState): SetLoadingStateInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetLoadingStateInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface;
