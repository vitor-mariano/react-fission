import Actions, { INITIAL_STATE, reducer } from './redux';

describe('User Repositories Redux', () => {
  test('INITIAL_STATE', () => {
    expect(INITIAL_STATE).toEqual({
      isRepositoriesStored: false,
      repositories: [],
      requesting: false,
      requestSuccess: null,
    });
  });

  test('request', () => {
    const state = reducer(INITIAL_STATE, Actions.userRepositoriesRequest());

    expect(state).toEqual(
      expect.objectContaining({
        requesting: true,
        requestSuccess: null,
      }),
    );
  });

  test('requestSuccess', () => {
    const state = reducer(INITIAL_STATE, Actions.userRepositoriesRequestSuccess([]));

    expect(state).toEqual(
      expect.objectContaining({
        isRepositoriesStored: true,
        repositories: expect.any(Array),
        requesting: false,
        requestSuccess: true,
      }),
    );
  });

  test('requestFailure', () => {
    const state = reducer(INITIAL_STATE, Actions.userRepositoriesRequestFailure());

    expect(state).toEqual(
      expect.objectContaining({
        requesting: false,
        requestSuccess: false,
      }),
    );
  });
});
