import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TopicsState } from './contracts/state';

export enum TopicsActionsType {
  SET_TOPICS = 'TOPICS/SET_TOPICS',
  FETCH_Topics = 'TOPICS/FETCH_Topics',
  SET_LOADING_STATE = 'TOPICS/SET_LOADING_STATE',
}

interface SetTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_TOPICS;
  payload: TopicsState['items'];
}

interface FetchTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.FETCH_Topics;
}
interface SetLoadingStatusInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_Topics,
});

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusInterface => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});

export type TopicsActions =
  | SetTopicsActionInterface
  | FetchTopicsActionInterface
  | SetLoadingStatusInterface;
