import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import R from 'ramda';
import TodosActions from '../../../../data/todos/redux';
import CheckButton from '../../../../components/CheckButton/';
import './styles.scss';

class Todos extends Component {
  static countUndone(todos) {
    return R.pipe(
      R.countBy(R.prop('done')),
      R.prop('false'),
      R.defaultTo(0),
    )(todos);
  }

  static filterList(filter, list) {
    return R.cond([
      [R.equals('active'), () => R.filter(R.compose(R.not, R.prop('done')), list)],
      [R.equals('completed'), () => R.filter(R.prop('done'), list)],
      [R.T, R.always(list)],
    ])(filter);
  }

  constructor(props) {
    super(props);

    this.state = {
      list: 'all',
      todoTitle: '',
    };
  }

  setList(list) {
    this.setState({ list });
  }

  setTodoTitle(todoTitle) {
    this.setState({ todoTitle });
  }

  addTodo(todoTitle) {
    this.props.addTodo(todoTitle);
    this.setTodoTitle('');
  }

  titleInputDidChange(event) {
    this.setTodoTitle(event.target.value);
  }

  titleInputKeyDidPress(event) {
    if (event.key === 'Enter') {
      this.addTodo(this.state.todoTitle);
    }
  }

  todoCheckDidPress(index) {
    this.toggleTodo(index);
  }

  toggleTodo(index) {
    this.props.toggleTodo(index);
  }

  renderTodos(todos) {
    return R.map(todo => (
      <li
        className={todo.done ? 'checked' : ''}
        key={todo.uuid}
      >
        <div className="check-button">
          <CheckButton
            checked={todo.done}
            onClick={() => this.todoCheckDidPress(todo.uuid)}
          />
        </div>
        <span className="todo-title">{todo.title}</span>
      </li>
    ), todos);
  }

  render() {
    return (
      <div className="todos">
        <input
          className="todo-title-input"
          onChange={event => this.titleInputDidChange(event)}
          onKeyPress={event => this.titleInputKeyDidPress(event)}
          placeholder="What needs to be done?"
          type="text"
          value={this.state.todoTitle}
        />
        <ol className="list">
          {
            this.renderTodos(
              Todos.filterList(
                this.state.list,
                this.props.todos,
              ),
            )
          }
        </ol>
        <div className="footer">
          <span>{Todos.countUndone(this.props.todos)} items left</span>
          <div className="controller">
            <ul>
              <li className={this.state.list === 'all' ? 'active' : ''}>
                <button
                  onClick={() => this.setList('all')}
                  type="button"
                >
                  <span>All</span>
                </button>
              </li>
              <li className={this.state.list === 'active' ? 'active' : ''}>
                <button
                  onClick={() => this.setList('active')}
                  type="button"
                >
                  <span>Active</span>
                </button>
              </li>
              <li className={this.state.list === 'completed' ? 'active' : ''}>
                <button
                  onClick={() => this.setList('completed')}
                  type="button"
                >
                  <span>Completed</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      uuid: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todoTitle => dispatch(TodosActions.todosAdd(todoTitle)),
    toggleTodo: index => dispatch(TodosActions.todosToggle(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
