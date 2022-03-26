import { state } from '../../../utils/stateForTesting';
import { selectLoadingStatus } from './selectors';

describe('application selectrors', () => {
  describe('selectLoadingStatus', () => {
    it('should return correct count items', () => {
      const result = selectLoadingStatus(state);
      expect(true).toBe(state.appication.loadingStatus);
    });
  });
});
