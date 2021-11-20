import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  setLoadingState,
  setTweets,
  TweetsActionsType,
} from './actionCreators';
import { LoadingState, TweetsState, TweetInterface } from './contracts/state';

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
    const data = {
      id: 1,
      _id: Math.random().toString().substr(2),
      text: payload,
      user: {
        fullname: 'alextestovuj',
        userName: 'alextestovuj',
        avatarUrl: 'https://source.unsplash.com/random/100x100?3',
      },
    };

    const items: TweetsState['items'] = yield call(TweetsApi.addTweet, data);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}
