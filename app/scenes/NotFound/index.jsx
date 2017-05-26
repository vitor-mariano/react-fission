import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.scss';

class NotFoundScene extends Component {
  componentWillMount() {
    document.title = 'Page not found - React Fission';
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <img
            alt="Not Found"
            src="images/not-found.png"
          />
          <h2 className="jumbotron__subtitle">
            <FormattedMessage id="not_found.title" />
          </h2>
        </section>
      </div>
    );
  }
}

NotFoundScene.propTypes = {
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NotFoundScene),
);
