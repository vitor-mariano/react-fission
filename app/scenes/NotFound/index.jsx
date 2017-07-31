import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Image from 'react-retina-image';
import './styles.scss';

class NotFoundScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'not_found.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <section className="not-found-page text-center">
        <FormattedMessage id="not_found.page_title">
          {message => (
            <Image
              alt={message}
              src="images/not-found.png"
            />
          )}
        </FormattedMessage>
        <h2 className="display-3 not-found-page__title">
          <FormattedMessage id="not_found.title" />
        </h2>
      </section>
    );
  }
}

export default NotFoundScene;
