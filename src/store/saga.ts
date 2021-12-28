import { all } from 'redux-saga/effects';
import { tweetsSaga } from './ducks/tweets/sagas';
import { topicsSaga } from './ducks/topics/sagas';
import { tweetSaga } from './ducks/tweet/sagas';
import { userSaga } from './ducks/user/sagas';
import { usersSaga } from './ducks/users/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga(), tweetSaga(), userSaga(), usersSaga()]);
}
