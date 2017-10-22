import { all, takeLatest } from 'redux-saga/effects';
import HttpService from '../services/HttpService';

import { ProfileTypes } from './profile/redux';
import profileRequest from './profile/sagas';

import { UserRepositoriesTypes } from './user_repositories/redux';
import userRepositoriesRequest from './user_repositories/sagas';

const http = HttpService.create();

export default function* root() {
  yield all([
    takeLatest(ProfileTypes.PROFILE_REQUEST, profileRequest, http),
    takeLatest(UserRepositoriesTypes.USER_REPOSITORIES_REQUEST, userRepositoriesRequest, http),
  ]);
}
