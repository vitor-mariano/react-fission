import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  /* eslint-disable */
  github: require('./github/redux').reducer,
  posts: require('./posts/redux').reducer,
  routing: routerReducer,
  /* eslint-enable */
});

export default rootReducer;
