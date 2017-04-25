import { call, put } from 'redux-saga/effects';
import ProfileActions from './redux';

export default function* profileRequest(http, { username }) {
  const response = yield call(http.profileRequest, username);

  if (response.ok) {
    yield put(ProfileActions.profileRequestSuccess(response.data));
  } else {
    yield put(ProfileActions.profileRequestFailure());
  }
}
