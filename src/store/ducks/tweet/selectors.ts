import { AppStateType } from '../../rootReducer';
import { LoadingStatus, TweetInterface } from '../../types';
import { TweetState } from './contracts/state';

export const selectTweet = (state: AppStateType): TweetState => state.tweet;

export const selectLoadingStatus = (state: AppStateType): string =>
  selectTweet(state).LoadingStatus;

export const selectIsLoading = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsLoaded = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetItem = (state: AppStateType): TweetInterface | undefined =>
  selectTweet(state).items;
