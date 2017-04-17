import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import App from './root/App';

const root = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

render(root, document.getElementById('app'));
