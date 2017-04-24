import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import R from 'ramda';
import 'babel-polyfill';

import rootReducer from './redux';
import rootSaga from './sagas';

const defaultState = {};

/* eslint-disable */
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  applyMiddleware(sagaMiddleware),
  reduxExtension,
];

const store = createStore(
  rootReducer,
  defaultState,
  R.pipe(
    R.filter(R.is(Object)),
    R.apply(compose),
  )(middlewares),
);

sagaMiddleware.run(rootSaga);

const recoveredHistory = browserHistory || createBrowserHistory();

export const history = syncHistoryWithStore(recoveredHistory, store);

export default store;
