import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import TodosActions from '../../../../data/todos/redux';
import CheckButton from '../../../../components/CheckButton/';
import RS from '../../../../lib/reactsauce';
import {
  countTodosBy,
  filterList,
} from './functions';
import './styles.scss';

class Todos extends Component {
  static intl(id) {
    return `todos.components.todos.${id}`;
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

  clearButtonDidClick() {
    this.props.clearTodos();
  }

  removeTodoButtonDidClick(index) {
    this.props.removeTodo(index);
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
        styleName={
          RS.classes({
            'todo-item': true,
            'todo-item--checked': todo.done,
          })
        }
        key={todo.uuid}
      >
        <div styleName="todo-item__wrapper">
          <div styleName="todo-item__check-button">
            <CheckButton
              checked={todo.done}
              onClick={() => this.todoCheckDidPress(todo.uuid)}
            />
          </div>
          <span styleName="todo-item__title">{todo.title}</span>
        </div>
        <button
          styleName="todo-item__close-button"
          onClick={() => this.removeTodoButtonDidClick(todo.uuid)}
          type="button"
        />
      </li>
    ), todos);
  }

  render() {
    const done = countTodosBy(true, this.props.todos);
    const undone = countTodosBy(false, this.props.todos);

    return (
      <div styleName="todos">
        <FormattedMessage id={Todos.intl('placeholder')}>
          {message => (
            <input
              styleName="todos__new-task-input"
              onChange={event => this.titleInputDidChange(event)}
              onKeyPress={event => this.titleInputKeyDidPress(event)}
              placeholder={message}
              type="text"
              value={this.state.todoTitle}
            />
          )}
        </FormattedMessage>
        <ol styleName="todo-list">
          {
            this.renderTodos(
              filterList(
                this.state.list,
                this.props.todos,
              ),
            )
          }
        </ol>
        <div styleName="todos__footer">
          <FormattedMessage id={Todos.intl('undone')} values={{ itemCount: undone }} />
          <div styleName="todos-controller">
            <ul styleName="todos-controller__list">
              <li
                styleName={
                  RS.classes({
                    'todos-controller__item': true,
                    'todos-controller__item--active': this.state.list === 'all',
                  })
                }
              >
                <button
                  styleName="todos-button"
                  onClick={() => this.setList('all')}
                  type="button"
                >
                  <FormattedMessage id={Todos.intl('all')} />
                </button>
              </li>
              <li
                styleName={
                  RS.classes({
                    'todos-controller__item': true,
                    'todos-controller__item--active': this.state.list === 'active',
                  })
                }
              >
                <button
                  styleName="todos-button"
                  onClick={() => this.setList('active')}
                  type="button"
                >
                  <FormattedMessage id={Todos.intl('active')} />
                </button>
              </li>
              <li
                styleName={
                  RS.classes({
                    'todos-controller__item': true,
                    'todos-controller__item--active': this.state.list === 'completed',
                  })
                }
              >
                <button
                  styleName="todos-button"
                  onClick={() => this.setList('completed')}
                  type="button"
                >
                  <FormattedMessage id={Todos.intl('completed')} />
                </button>
              </li>
            </ul>
          </div>
          {
            done > 0 && (
              <button
                styleName="todos__clear-button"
                onClick={() => this.clearButtonDidClick()}
                type="button"
              >
                <FormattedMessage id={Todos.intl('clear_completed')} />
              </button>
            )
          }
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
  clearTodos: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
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
    clearTodos: () => dispatch(TodosActions.todosClear()),
    removeTodo: index => dispatch(TodosActions.todosRemove(index)),
    toggleTodo: index => dispatch(TodosActions.todosToggle(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
