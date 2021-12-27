import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingStatus } from '../../types';
import { TweetsState } from './contracts/state';

export const selectTweetsState = (state: AppStateType): TweetsState => state.tweets;

export const selectLoadingStatus = (state: AppStateType): string =>
  selectTweetsState(state).LoadingStatus;

export const selectIsLoading = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsLoaded = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetsItems = createSelector(selectTweetsState, (tweets) => tweets.items);
