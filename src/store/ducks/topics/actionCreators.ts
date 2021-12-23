import { Action } from 'redux';
import { LoadingState } from '../types';
import { TopicsState } from './contracts/state';

export enum TopicsActionsType {
  SET_Topics = 'Topics/SET_Topics',
  FETCH_Topics = 'Topics/FETCH_Topics',
  SET_LOADING_STATE = 'Topics/SET_LOADING_STATE',
}

interface SetTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_Topics;
  payload: TopicsState['items'];
}

interface FetchTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.FETCH_Topics;
}
interface SetLoadingStateInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_Topics,
});

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_Topics,
  payload,
});

export const setLoadingState = (payload: LoadingState): SetLoadingStateInterface => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});

export type TopicsActions =
  | SetTopicsActionInterface
  | FetchTopicsActionInterface
  | SetLoadingStateInterface;
