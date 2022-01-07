import { LoadingStatus, TweetInterface } from '../../types';
import {
  FetchAddTweetActionInterface,
  FetchTweetActionInterface,
  RemoveTweetActionInterface,
  SetLoadingStatusInterface,
  SetTweetActionInterface,
  TweetActionsType,
  UpdateTweetActionInterface,
} from './actionsTypes';

export const setTweet = (payload: TweetInterface | undefined): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET,
  payload,
});

export const fetchTweet = (tweetId: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_TWEET,
  payload: tweetId,
});

export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
  type: TweetActionsType.REMOVE_TWEET,
  payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetActionsType.FETCH_ADD_TWEET,
  payload,
});

export const updateTweet = (
  tweetId: string | undefined,
  text: string,
): UpdateTweetActionInterface => ({
  type: TweetActionsType.UPDATE_TWEET,
  payload: {
    tweetId,
    text,
  },
});

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});
