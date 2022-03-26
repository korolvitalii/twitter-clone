import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TopicsState } from './contracts/state';

export enum TopicsActionsType {
  SET_TOPICS = 'TOPICS/SET_TOPICS',
  FETCH_TOPICS = 'TOPICS/FETCH_Topics',
  SET_LOADING_STATE = 'TOPICS/SET_LOADING_STATE',
}

export interface SetTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_TOPICS;
  payload: TopicsState['items'];
}

export interface FetchTopicsActionInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.FETCH_TOPICS;
}
export interface SetLoadingStatusInterface extends Action<TopicsActionsType> {
  type: TopicsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export type TopicsActions =
  | SetTopicsActionInterface
  | FetchTopicsActionInterface
  | SetLoadingStatusInterface;
