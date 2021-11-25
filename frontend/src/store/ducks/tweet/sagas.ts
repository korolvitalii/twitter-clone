import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';

import {
  FetchTweetActionInterface,
  SetLoadingState,
  setTweet,
  TweetActionsType,
} from './actionCreators';
import { LoadingState, TweetState } from './contracts/state';

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const items: TweetState['items'] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(items));
  } catch (error) {
    yield put(SetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
}
