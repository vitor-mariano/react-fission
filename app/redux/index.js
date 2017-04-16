import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  github: require('./GitHubRedux').reducer,
  posts: require('./PostsRedux').reducer,
  routing: routerReducer
})

export default rootReducer
