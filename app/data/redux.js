import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  /* eslint-disable */
  github: require('./github/redux').reducer,
  routing: routerReducer,
  /* eslint-enable */
});

export default rootReducer;
