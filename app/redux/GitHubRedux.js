import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  githubGetRepos: ['username'],
  githubGetReposSuccess: ['repos'],
  githubGetReposFailure: null
})

export const GitHubTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  gettingRepos: false,
  repos: null,
  reposSuccess: null
})

export const getRepos = (state, { username }) =>
  state.merge({
    gettingRepos: true,
    reposSuccess: null
  })

export const getReposSuccess = (state, { repos }) =>
  state.merge({
    gettingRepos: false,
    repos,
    reposSuccess: true
  })

export const getReposFailure = (state) =>
  state.merge({
    gettingRepos: false,
    reposSuccess: false
  })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GITHUB_GET_REPOS]: getRepos,
  [Types.GITHUB_GET_REPOS_SUCCESS]: getReposSuccess,
  [Types.GITHUB_GET_REPOS_FAILURE]: getReposFailure
})
