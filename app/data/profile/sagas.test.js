import { call, put } from 'redux-saga/effects';
import FixtureService from '../../services/FixtureService';
import ProfileActions from './redux';
import profileRequest from './sagas';

const stepper = fn => mock => fn.next(mock).value;
const username = 'matheusmariano';

describe('Profile Sagas', () => {
  test('profileRequest', () => {
    const step = stepper(
      profileRequest(FixtureService, { username }),
    );

    expect(
      step(),
    ).toEqual(
      call(FixtureService.profileRequest, username),
    );
  });

  test('profileRequestSuccess', () => {
    const response = FixtureService.profileRequest(username);
    const step = stepper(
      profileRequest(FixtureService, { username }),
    );

    step(); // Request

    expect(
      step(response),
    ).toEqual(
      put(ProfileActions.profileRequestSuccess(response.data)),
    );
  });

  test('profileRequestFailure', () => {
    const response = { ok: false };
    const step = stepper(
      profileRequest(FixtureService, { username }),
    );

    step(); // Request

    expect(
      step(response),
    ).toEqual(
      put(ProfileActions.profileRequestFailure()),
    );
  });
});
