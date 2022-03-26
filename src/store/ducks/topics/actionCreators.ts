import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import {
  FetchTopicsActionInterface,
  SetLoadingStatusInterface,
  SetTopicsActionInterface,
  TopicsActionsType,
} from './actionTypes';
import { TopicsState } from './contracts/state';

export const fetchTopics = (): FetchTopicsActionInterface => ({
  type: TopicsActionsType.FETCH_TOPICS,
});

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
  type: TopicsActionsType.SET_TOPICS,
  payload,
});

export const setLoadingStatus = (payload: LoadingStatus): SetLoadingStatusInterface => ({
  type: TopicsActionsType.SET_LOADING_STATE,
  payload,
});
