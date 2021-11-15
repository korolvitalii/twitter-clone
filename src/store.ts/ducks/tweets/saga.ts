import { all } from 'redux-saga/effects';
import { fetchTweetsRequest, tweetsSaga } from './sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), fetchTweetsRequest()]);
}
