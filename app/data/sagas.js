import { takeLatest } from 'redux-saga';
import HttpService from '../services/HttpService';

import { ProfileTypes } from './profile/redux';

import profileRequest from './profile/sagas';

const http = HttpService.create();

export default function* root() {
  yield [
    takeLatest(ProfileTypes.PROFILE_REQUEST, profileRequest, http),
  ];
}
