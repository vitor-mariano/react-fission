import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Todos from './components/Todos/';
import './styles.scss';

class TodosScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'todos.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <h1
            className="display-3"
            styleName="todos-page__title"
          >
            <FormattedMessage id="todos.title" />
          </h1>
        </header>
        <section styleName="todos-page__component">
          <Todos />
        </section>
      </div>
    );
  }
}

export default withRouter(TodosScene);
