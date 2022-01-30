import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/TweetsApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setTweets } from './actionCreators';
import { TweetsActionsType } from './actionsTypes';
import { TweetsState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
    yield put(setLoadingStatus(LoadingStatus.LOADED));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
