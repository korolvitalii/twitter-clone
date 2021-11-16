import { combineReducers } from 'redux';
import { tagsReducer } from './ducks/tags/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
