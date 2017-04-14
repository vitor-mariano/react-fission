import { createStore } from 'redux'
import { browserHistory } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './index'

const defaultState = {}

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, defaultState, reduxExtension)

const recoveredHistory = browserHistory || createBrowserHistory()

export const history = syncHistoryWithStore(recoveredHistory, store)

export default store
