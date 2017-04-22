import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Todos from './components/Todos/';
import './styles.scss';

class TodosScene extends Component {
  render() {
    return (
      <div id="todos-scene">
        <header className="page-header">
          <h1>Todos</h1>
        </header>
        <section className="flex flex-center">
          <Todos />
        </section>
      </div>
    );
  }
}

TodosScene.propTypes = {
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
  connect(mapStateToProps, mapDispatchToProps)(TodosScene),
);
