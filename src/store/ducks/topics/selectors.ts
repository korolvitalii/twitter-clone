import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingState } from '../types';
import { TopicsState } from './contracts/state';

export const selectTopics = (state: AppStateType): TopicsState => state.topics;

export const selectLoadingState = (state: AppStateType): string => selectTopics(state).loadingState;

export const selectIsTopicsLoading = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTopicsLoaded = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTopicsItems = createSelector(selectTopics, (Topics) => Topics.items);
