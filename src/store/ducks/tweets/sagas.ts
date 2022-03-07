import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setTweets } from './actionCreators';
import { TweetsActionsType } from './actionsTypes';
import { TweetsState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/profile') ? pathname.split('/').pop() : undefined;

    console.log(userId);
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets, userId);
    yield put(setTweets(items));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
