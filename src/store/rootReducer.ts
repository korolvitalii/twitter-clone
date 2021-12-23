import { combineReducers } from 'redux';
import { topicsReducer } from './ducks/topics/reducer';
import { tweetReducer } from './ducks/tweet/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  topics: topicsReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
