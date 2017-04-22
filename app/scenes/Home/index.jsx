import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.scss';

class HomeScreen extends Component {
  componentWillMount() {
    document.title = 'React Fission';
  }

  render() {
    return (
      <div id="home-scene">
        <section className="hero">
          <h1>Hello, React!</h1>
          <h2>You are ready to start your amazing project.</h2>
        </section>
      </div>
    );
  }
}

HomeScreen.propTypes = {
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
  connect(mapStateToProps, mapDispatchToProps)(HomeScreen),
);
