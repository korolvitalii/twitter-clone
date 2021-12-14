import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import {
  FetchAddTweetActionInterface,
  setLoadingState,
  setTweets,
  TweetsActionsType,
} from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetsRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const items: TweetsState['items'] = yield call(TweetsApi.addTweet, payload);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}
