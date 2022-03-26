import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { LoadingStatus, TweetInterface } from '../../types';
import { setTweets } from '../tweets/actionCreators';
import { TweetsState } from '../tweets/contracts/state';
import { setLoadingStatus, setTweet } from './actionCreators';
import {
  FetchAddTweetActionInterface,
  FetchTweetActionInterface,
  RemoveTweetActionInterface,
  TweetActionsType,
  UpdateTweetActionInterface,
} from './actionsTypes';

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    const item: TweetInterface = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(item));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
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

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    yield call(TweetsApi.addTweet, payload);
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
  yield takeEvery(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeEvery(TweetActionsType.REMOVE_TWEET, removeTweetRequest);
  yield takeEvery(TweetActionsType.UPDATE_TWEET, updateTweetRequest);
}
