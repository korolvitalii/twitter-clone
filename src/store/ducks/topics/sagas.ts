import { call, put, takeEvery } from 'redux-saga/effects';
import { TopicsApi } from '../../../services/api/TopicsApi';
import { LoadingStatus } from '../../types';
import { setLoadingStatus, setTopics, TopicsActionsType } from './actionCreators';
import { TopicsState } from './contracts/state';

export function* fetchTopicsRequest() {
  try {
    const items: TopicsState['items'] = yield call(TopicsApi.fetchTopics);
    yield put(setTopics(items));
  } catch (error) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* topicsSaga() {
  yield takeEvery(TopicsActionsType.FETCH_Topics, fetchTopicsRequest);
}
