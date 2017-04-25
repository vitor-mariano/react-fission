import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  /* eslint-disable */
  profile: require('./profile/redux').reducer,
  todos: require('./todos/redux').reducer,
  routing: routerReducer,
  /* eslint-enable */
});

export default rootReducer;
