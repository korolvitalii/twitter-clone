import { AppStateType } from '../../rootReducer';

export const getTweets = (state: AppStateType) => state.tweets.items;
