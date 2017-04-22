import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import R from 'ramda';

const { Types, Creators } = createActions({
  todosAdd: ['todoTitle'],
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  todos: [
    {
      title: 'Whatever',
      completed: true,
    },
    {
      title: 'Whatever',
      completed: false,
    },
  ],
});

export const add = (state, { todoTitle }) =>
  state.merge({
    todos: R.append({
      title: todoTitle,
      completed: false,
    }, state.todos),
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_ADD]: add,
});
