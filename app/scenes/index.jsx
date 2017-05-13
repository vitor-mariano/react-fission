import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import R from 'ramda';
import store, { history } from '../data/setup/store';
import App from './Root/App';
import locales from '../intl/locales';
import messages from '../intl/messages';
import '../intl/add-locales';

class Root extends Component {
  static getLocale(locale) {
    return R.cond([
      [
        R.flip(R.has)(messages),
        R.identity,
      ],
      [
        R.pipe(
          R.take(2),
          R.flip(R.has)(messages),
        ),
        R.take(2),
      ],
      [
        R.T,
        R.always(
          R.head(locales),
        ),
      ],
    ])(locale);
  }

  constructor(props) {
    super(props);

    this.state = {
      locale: Root.getLocale(navigator.language),
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
            <App />
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

render(<Root />, document.getElementById('app'));
