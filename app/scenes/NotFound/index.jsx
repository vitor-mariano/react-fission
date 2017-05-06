import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.scss';

class NotFoundScene extends Component {
  componentWillMount() {
    document.title = 'Page not found - React Fission';
  }

  render() {
    return (
      <div id="not-found-scene">
        <section className="hero">
          <img
            alt="Not Found"
            src="images/not-found.png"
          />
          <h1>Page Not Found</h1>
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
