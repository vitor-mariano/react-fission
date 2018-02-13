import React, { Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import * as R from 'ramda';
import store, { history } from '../../data/setup/store';
import App from './App';
import { getLocale } from '../../intl/';
import locales from '../../intl/locales';
import messages from '../../intl/messages';
import '../../intl/add-locales';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: getLocale(navigator.language, R.head(locales), messages),
    };
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider
          locale={this.state.locale}
          messages={messages[this.state.locale]}
        >
          <Router history={history}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default Root;
