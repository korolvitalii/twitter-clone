import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { LoadingStatus } from '../../types';

import { setLoadingStatus, setTweet } from './actionCreators';
import { FetchTweetActionInterface, TweetActionsType } from './actionsTypes';
import { TweetState } from './contracts/state';

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const items: TweetState['items'] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(items));
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* removeTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    yield call(TweetsApi.removeTweet, tweetId);
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* updateTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const { data } = yield call(TweetsApi.updateTweet, tweetId);

    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
  yield takeEvery(TweetActionsType.REMOVE_TWEET, removeTweetRequest);
  yield takeEvery(TweetActionsType.UPDATE_TWEET, updateTweetRequest);
}
