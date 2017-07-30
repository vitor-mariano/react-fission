import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  userRepositoriesRequest: ['username'],
  userRepositoriesRequestSuccess: ['repositories'],
  userRepositoriesRequestFailure: null,
});

export const UserRepositoriesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  isRepositoriesStored: false,
  repositories: [],
  requesting: false,
  requestSuccess: null,
});

export const request = state =>
  state.merge({
    requesting: true,
    requestSuccess: null,
  });

export const requestSuccess = (state, { repositories }) =>
  state.merge({
    isRepositoriesStored: true,
    repositories,
    requesting: false,
    requestSuccess: true,
  });

export const requestFailure = state =>
  state.merge({
    requesting: false,
    requestSuccess: false,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REPOSITORIES_REQUEST]: request,
  [Types.USER_REPOSITORIES_REQUEST_SUCCESS]: requestSuccess,
  [Types.USER_REPOSITORIES_REQUEST_FAILURE]: requestFailure,
});
