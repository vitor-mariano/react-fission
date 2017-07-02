import Actions, { INITIAL_STATE, reducer } from './redux';

describe('Profile Redux', () => {
  test('INITIAL_STATE', () => {
    expect(INITIAL_STATE).toEqual({
      isProfileStored: false,
      profile: null,
      requesting: false,
      requestSuccess: null,
    });
  });

  test('request', () => {
    const state = reducer(INITIAL_STATE, Actions.profileRequest());

    expect(state).toEqual(
      expect.objectContaining({
        requesting: true,
        requestSuccess: null,
      }),
    );
  });

  test('requestSuccess', () => {
    const state = reducer(INITIAL_STATE, Actions.profileRequestSuccess({}));

    expect(state).toEqual(
      expect.objectContaining({
        isProfileStored: true,
        requesting: false,
        requestSuccess: true,
        profile: expect.any(Object),
      }),
    );
  });

  test('requestFailure', () => {
    const state = reducer(INITIAL_STATE, Actions.profileRequestFailure());

    expect(state).toEqual(
      expect.objectContaining({
        requesting: false,
        requestSuccess: false,
      }),
    );
  });
});
