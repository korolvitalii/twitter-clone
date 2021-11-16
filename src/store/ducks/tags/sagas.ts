import { call, put, takeEvery } from 'redux-saga/effects';
import { TagsApi } from '../../../services/api/TagsApi';
import { SetLoadingState, setTags, TagsActionsType } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';

export function* fetchTagsRequest() {
  try {
    const items: TagsState['items'] = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(SetLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
