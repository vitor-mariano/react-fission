import { call, put } from 'redux-saga/effects';
import UserRepositoriesActions from './redux';

export default function* userRepositoriesRequest(http, { username }) {
  const response = yield call(http.userRepositoriesRequest, username);

  if (response.ok) {
    yield put(UserRepositoriesActions.userRepositoriesRequestSuccess(response.data));
  } else {
    yield put(UserRepositoriesActions.userRepositoriesRequestFailure());
  }
}
