import { Action } from 'redux';
import { LoadingState, TagsState } from './contracts/state';

export enum TagsActionsType {
  SET_TAGS = 'Tags/ SET_TAGS',
  FETCH_TAGS = 'Tags/FETCH_TAGS',
  SET_LOADING_STATE = 'Tags/SET_LOADING_STATE',
}

interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: TagsState['items'];
}

interface FetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}
interface SetLoadingStateInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export const SetLoadingState = (payload: LoadingState): SetLoadingStateInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export type TagsActions =
  | SetTagsActionInterface
  | FetchTagsActionInterface
  | SetLoadingStateInterface;
