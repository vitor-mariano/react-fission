import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  postAdd: ['post']
})

export const PostsType = Types
export default Creators

export const INITIAL_STATE = Immutable({
  list: [
    {
      title: 'My First Post',
      body: 'This is my first post.'
    },
    {
      title: 'My Second Post',
      body: 'This is my second post.'
    }
  ]
})

export const add = (state, { post }) =>
  state.merge({ list: state.list.concat(post) })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_ADD]: add
})
