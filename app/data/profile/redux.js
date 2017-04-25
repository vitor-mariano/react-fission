import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  profileRequest: ['username'],
  profileRequestSuccess: ['profile'],
  profileRequestFailure: null,
});

export const ProfileTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  profile: {},
  requesting: false,
});

export const request = state =>
  state.merge({
    profile: {},
    requesting: true,
  });

export const requestSuccess = (state, { profile }) =>
  state.merge({
    profile,
    requesting: false,
  });

export const requestFailure = state =>
  state.merge({
    requesting: false,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROFILE_REQUEST]: request,
  [Types.PROFILE_REQUEST_SUCCESS]: requestSuccess,
  [Types.PROFILE_REQUEST_FAILURE]: requestFailure,
});
