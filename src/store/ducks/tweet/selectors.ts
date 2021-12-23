import { AppStateType } from '../../rootReducer';
import { LoadingState } from '../types';
import { TweetInterface, TweetState } from './contracts/state';

export const selectTweet = (state: AppStateType): TweetState => state.tweet;

export const selectLoadingState = (state: AppStateType): string => selectTweet(state).loadingState;

export const selectIsLoading = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoaded = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetItem = (state: AppStateType): TweetInterface | undefined =>
  selectTweet(state).items;
