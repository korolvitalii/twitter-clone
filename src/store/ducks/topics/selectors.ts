import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingStatus } from '../../types';
import { TopicsState } from './contracts/state';

export const selectTopics = (state: AppStateType): TopicsState => state.topics;

export const selectLoadingStatus = (state: AppStateType): string =>
  selectTopics(state).LoadingStatus;

export const selectIsTopicsLoading = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTopicsLoaded = (state: AppStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTopicsItems = createSelector(selectTopics, (Topics) => Topics.items);
