import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckButton from '../../../../components/CheckButton/';
import './styles.scss';

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <input
          className="todo-title-input"
          placeholder="What needs to be done?"
          type="text"
        />
        <ol className="list">
          <li className="checked">
            <div className="check-button">
              <CheckButton checked />
            </div>
            <span className="todo-title">Whatever</span>
          </li>
          <li>
            <div className="check-button">
              <CheckButton />
            </div>
            <span>Whatever</span>
          </li>
        </ol>
        <div className="footer">
          <span>1 item left</span>
          <div className="controller">
            <ul>
              <li className="active">
                <button type="button">All</button>
              </li>
              <li>
                <button type="button">Active</button>
              </li>
              <li>
                <button type="button">Completed</button>
              </li>
            </ul>
          </div>
        </div>
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
