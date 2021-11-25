import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingState, TweetState } from './contracts/state';

export const selectTweet = (state: AppStateType): TweetState => state.tweet;

export const selectLoadingState = (state: AppStateType): string => selectTweet(state).loadingState;

export const selectIsLoading = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoaded = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetItem = createSelector(selectTweet, (tweet) => tweet.items);
