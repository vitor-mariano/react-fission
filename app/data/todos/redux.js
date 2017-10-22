import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import * as R from 'ramda';
import uuid from 'uuid/v1';

const { Types, Creators } = createActions({
  todosAdd: ['todoTitle'],
  todosClear: null,
  todosRemove: ['index'],
  todosToggle: ['index'],
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  todos: [
    {
      uuid: uuid(),
      title: 'Learn React',
      done: true,
    },
    {
      uuid: uuid(),
      title: 'Start a new project',
      done: false,
    },
  ],
});

export const add = (state, { todoTitle }) =>
  state.merge({
    todos: R.append({
      uuid: uuid(),
      title: todoTitle,
      done: false,
    }, state.todos),
  });

export const clear = state =>
  state.merge({
    todos: R.filter(R.propEq('done', false), state.todos),
  });

export const remove = (state, action) => {
  const index = R.findIndex(R.propEq('uuid', action.index), state.todos);

  const todos = index > -1 ? R.remove(index, 1, state.todos) : state.todos;

  return state.merge({ todos });
};

export const toggle = (state, action) => {
  const index = R.findIndex(R.propEq('uuid', action.index), state.todos);

  const todos = index > -1 ? R.over(
    R.lensPath([index, 'done']),
    R.not,
    state.todos,
  ) : state.todos;

  return state.merge({ todos });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_ADD]: add,
  [Types.TODOS_CLEAR]: clear,
  [Types.TODOS_REMOVE]: remove,
  [Types.TODOS_TOGGLE]: toggle,
});
