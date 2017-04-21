import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <input
          className="add-input"
          placeholder="What needs to be done?"
          type="text"
        />
      </div>
    );
  }
}

Todos.propTypes = {
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
