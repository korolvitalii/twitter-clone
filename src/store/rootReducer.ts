import { combineReducers } from 'redux';
import { appicationReducer } from './ducks/appication/reducer';
import { topicsReducer } from './ducks/topics/reducer';
import { tweetReducer } from './ducks/tweet/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { userReducer } from './ducks/user/reducer';
import { usersReducer } from './ducks/users/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  topics: topicsReducer,
  user: userReducer,
  users: usersReducer,
  appication: appicationReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
