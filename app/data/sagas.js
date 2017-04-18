import { takeLatest } from 'redux-saga';
import HttpService from '../services/HttpService';

import { GitHubTypes } from './github/redux';

import githubGetRepos from './github/sagas';

const http = HttpService.create();

export default function* root() {
  yield [
    takeLatest(GitHubTypes.GITHUB_GET_REPOS, githubGetRepos, http),
  ];
}
