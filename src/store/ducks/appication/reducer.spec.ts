import { LoadingStatus } from '../../types';
import { setAppLoadingAction } from './actionCreators';
import { appicationReducer } from './reducer';

describe('topic reducer', () => {
  let state: any;

  beforeEach(() => {
    state = {
      items: [],
      status: LoadingStatus.NEVER,
    };
  });

  it('setAppLoadingAction should work correct', () => {
    const action = setAppLoadingAction(true);
    const newState = appicationReducer(state, action);
    expect(newState.loadingStatus).toBe(true);
  });
});
