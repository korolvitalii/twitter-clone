import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setTweet } from './actionCreators';
import {
  FetchTweetActionInterface,
  RemoveTweetActionInterface,
  TweetActionsType,
  UpdateTweetActionInterface,
} from './actionsTypes';
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

export function* removeTweetRequest({ payload: tweetId }: RemoveTweetActionInterface) {
  try {
    yield call(TweetsApi.removeTweet, tweetId);
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* updateTweetRequest({ payload }: UpdateTweetActionInterface) {
  try {
    yield call(TweetsApi.updateTweet, payload);
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
