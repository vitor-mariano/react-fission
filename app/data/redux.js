import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  /* eslint-disable global-require */
  profile: require('./profile/redux').reducer,
  todos: require('./todos/redux').reducer,
  userRepositories: require('./user_repositories/redux').reducer,
  routing: routerReducer,
  /* eslint-enable */
});

export default rootReducer;
