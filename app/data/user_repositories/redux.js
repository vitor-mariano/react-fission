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
});

export const request = state =>
  state.merge({
    requesting: true,
  });

export const requestSuccess = (state, { repositories }) =>
  state.merge({
    isRepositoriesStored: true,
    repositories,
    requesting: false,
  });

export const requestFailure = state =>
  state.merge({
    requesting: false,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REPOSITORIES_REQUEST]: request,
  [Types.USER_REPOSITORIES_REQUEST_SUCCESS]: requestSuccess,
  [Types.USER_REPOSITORIES_REQUEST_FAILURE]: requestFailure,
});
