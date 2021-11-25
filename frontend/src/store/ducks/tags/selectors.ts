import { createSelector } from 'reselect';
import { AppStateType } from '../../rootReducer';
import { LoadingState, TagsState } from './contracts/state';

export const selectTags = (state: AppStateType): TagsState => state.tags;

export const selectLoadingState = (state: AppStateType): string => selectTags(state).loadingState;

export const selectIsTagsLoading = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: AppStateType) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
