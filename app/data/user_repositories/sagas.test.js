import { call, put } from 'redux-saga/effects';
import UserRepositoriesActions from './redux';
import userRepositoriesRequest from './sagas';
import FixtureService from '../../services/FixtureService';

const stepper = fn => mock => fn.next(mock).value;
const username = 'matheusmariano';

describe('User Repositories Sagas', () => {
  test('userRepositoriesRequest', () => {
    const step = stepper(
      userRepositoriesRequest(FixtureService, { username }),
    );

    expect(
      step(),
    ).toEqual(
      call(FixtureService.userRepositoriesRequest, username),
    );
  });

  test('userRepositoriesRequestSuccess', () => {
    const response = FixtureService.userRepositoriesRequest(username);

    const step = stepper(
      userRepositoriesRequest(FixtureService, { username }),
    );

    step(); // Request

    expect(
      step(response),
    ).toEqual(
      put(UserRepositoriesActions.userRepositoriesRequestSuccess(response.data)),
    );
  });

  test('userRepositoriesRequestFailure', () => {
    const response = { ok: false };

    const step = stepper(
      userRepositoriesRequest(FixtureService, { username }),
    );

    step(); // Request

    expect(
      step(response),
    ).toEqual(
      put(UserRepositoriesActions.userRepositoriesRequestFailure()),
    );
  });
});
