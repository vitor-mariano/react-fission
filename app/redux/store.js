import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import 'babel-polyfill';

import rootReducer from './index';
import rootSaga from '../sagas/';

const defaultState = {};

/* eslint-disable */
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxExtension,
  ),
);

sagaMiddleware.run(rootSaga);

const recoveredHistory = browserHistory || createBrowserHistory();

export const history = syncHistoryWithStore(recoveredHistory, store);

export default store;
