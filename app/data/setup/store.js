import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import 'babel-polyfill';

import rootReducer from '../redux';
import rootSaga from '../sagas';
import immutablePersistenceTransform from './transform';
import persist from '../persist';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  applyMiddleware(sagaMiddleware),
  autoRehydrate(),
];

/* eslint-disable no-underscore-dangle */
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

if (reduxExtension) {
  middlewares.push(reduxExtension());
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(...middlewares),
);

persistStore(store, {
  transforms: [immutablePersistenceTransform],
  ...persist,
});

sagaMiddleware.run(rootSaga);

const recoveredHistory = browserHistory || createBrowserHistory();

export const history = syncHistoryWithStore(recoveredHistory, store);

export default store;
