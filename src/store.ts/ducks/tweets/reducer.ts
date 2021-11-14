import produce, { Draft } from 'immer';
import { TweetsActions } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, actions: TweetsActions) => {},
initialState);
