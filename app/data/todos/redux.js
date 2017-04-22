import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import R from 'ramda';

const { Types, Creators } = createActions({
  todosAdd: ['todoTitle'],
  todosToggle: ['index'],
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  todos: [
    {
      title: 'Whatever',
      done: true,
    },
    {
      title: 'Whatever',
      done: false,
    },
  ],
});

export const add = (state, { todoTitle }) =>
  state.merge({
    todos: R.append({
      title: todoTitle,
      done: false,
    }, state.todos),
  });

export const toggle = (state, { index }) =>
  state.merge({
    todos: R.over(
      R.lensPath([index, 'done']),
      R.not,
      state.todos,
    ),
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_ADD]: add,
  [Types.TODOS_TOGGLE]: toggle,
});
