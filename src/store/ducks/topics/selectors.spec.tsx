import { state } from '../../../utils/stateForTesting';
import { LoadingStatus } from '../../types';
import {
  selectTopics,
  selectLoadingStatus,
  selectIsTopicsLoading,
  selectIsTopicsLoaded,
} from './selectors';

describe('topics selectrors', () => {
  describe('selectTopics', () => {
    it('should return correct count items', () => {
      const result = selectTopics(state);
      expect(result.items).toMatchObject(state.topics.items);
    });
  });

  describe('selectLoadingStatus', () => {
    it('should return correct count items', () => {
      const result = selectLoadingStatus(state);
      expect(result).toBe(LoadingStatus.LOADED);
    });
  });

  describe('selectIsTopicsLoading', () => {
    it('should return correct status', () => {
      const result = selectIsTopicsLoading(state);
      expect(result).toBeFalsy();
    });
  });

  describe('selectIsLoselectIsTopicsLoadedaded', () => {
    it('should return correct status', () => {
      const result = selectIsTopicsLoaded(state);
      expect(result).toBeTruthy();
    });
  });
});
