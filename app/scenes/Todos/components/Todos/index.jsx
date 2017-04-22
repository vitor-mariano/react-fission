import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import R from 'ramda';
import TodosActions from '../../../../data/todos/redux';
import CheckButton from '../../../../components/CheckButton/';
import './styles.scss';

const renderTodos = R.addIndex(R.map)((todo, index) => (
  <li
    className={todo.completed ? 'checked' : ''}
    key={index}
  >
    <div className="check-button">
      <CheckButton checked={todo.completed} />
    </div>
    <span className="todo-title">{todo.title}</span>
  </li>
));

function Todos(props) {
  return (
    <div className="todos">
      <input
        className="todo-title-input"
        placeholder="What needs to be done?"
        type="text"
      />
      <ol className="list">
        {renderTodos(props.todos)}
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

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todoTitle => dispatch(TodosActions.todosAdd(todoTitle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
