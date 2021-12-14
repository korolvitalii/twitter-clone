import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingState, TweetsState } from './contracts/state';

export const selectTweetsState = (state: AppStateType): TweetsState => state.tweets;

export const selectLoadingState = (state: AppStateType): string =>
  selectTweetsState(state).loadingState;

export const selectIsLoading = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoaded = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweetsState, (tweets) => tweets.items);
