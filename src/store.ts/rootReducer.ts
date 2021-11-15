import { combineReducers } from 'redux';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
