import { call, put } from 'redux-saga/effects';
import GitHubActions from './redux';

export default function* githubGetRepos(http, { username }) {
  const response = yield call(http.githubGetRepos, username);

  if (response.ok) {
    yield put(GitHubActions.githubGetReposSuccess(response.data));
  } else {
    yield put(GitHubActions.githubGetReposFailure());
  }
}
