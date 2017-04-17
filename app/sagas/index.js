import { takeLatest } from 'redux-saga';
import HttpService from '../services/HttpService';

import { GitHubTypes } from '../redux/GitHubRedux';

import githubGetRepos from './GitHubSagas';

const http = HttpService.create();

export default function* root() {
  yield [
    takeLatest(GitHubTypes.GITHUB_GET_REPOS, githubGetRepos, http),
  ];
}
