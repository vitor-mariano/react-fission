import * as R from 'ramda';
import Actions, { reducer, INITIAL_STATE } from './redux';

describe('Todos Redux', () => {
  test('INITIAL_STATE', () => {
    expect(INITIAL_STATE).toEqual({
      todos: [
        {
          uuid: expect.any(String),
          title: 'Learn React',
          done: true,
        },
        {
          uuid: expect.any(String),
          title: 'Start a new project',
          done: false,
        },
      ],
    });
  });

  test('add', () => {
    const title = 'New Task';
    const state = reducer(INITIAL_STATE, Actions.todosAdd(title));

    expect(
      R.last(state.todos),
    ).toMatchObject({
      uuid: expect.any(String),
      title,
      done: false,
    });
  });

  test('clear', () => {
    const state = reducer(INITIAL_STATE, Actions.todosClear());

    expect(state.todos).toEqual([
      {
        uuid: expect.any(String),
        title: 'Start a new project',
        done: false,
      },
    ]);
  });

  test('remove', () => {
    const index = 1;
    let state = reducer(
      INITIAL_STATE,
      Actions.todosRemove(
        INITIAL_STATE.todos[index].uuid,
      ),
    );

    expect(state.todos).toEqual([
      {
        uuid: expect.any(String),
        title: 'Learn React',
        done: true,
      },
    ]);

    /**
     * Test nonexistent UUIDs
     */
    state = reducer(INITIAL_STATE, Actions.todosRemove('nonexistent-uuid'));

    expect(state.todos).toBe(INITIAL_STATE.todos);
  });

  test('toggle', () => {
    const index = 0;
    let state = reducer(
      INITIAL_STATE,
      Actions.todosToggle(
        INITIAL_STATE.todos[index].uuid,
      ),
    );

    expect(
      R.nth(index, state.todos),
    ).toEqual(
      expect.objectContaining({
        done: false,
      }),
    );

    /**
     * Test nonexistent UUIDs
     */
    state = reducer(INITIAL_STATE, Actions.todosToggle('nonexistent-uuid'));

    expect(state.todos).toBe(INITIAL_STATE.todos);
  });
});
