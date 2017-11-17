import {
  countTodosBy, filterList,
} from './functions';

const todos = [
  {
    done: true,
  },
  {
    done: false,
  },
  {
    done: true,
  },
];

describe('Todos Functions', () => {
  test('countTodosBy', () => {
    expect(
      countTodosBy(true, todos),
    ).toBe(2);

    expect(
      countTodosBy(false, todos),
    ).toBe(1);

    expect(
      countTodosBy(true, []),
    ).toBe(0);

    expect(
      countTodosBy(false, []),
    ).toBe(0);
  });

  test('filterList', () => {
    expect(
      filterList('completed', todos),
    ).toEqual([
      {
        done: true,
      },
      {
        done: true,
      },
    ]);

    expect(
      filterList('active', todos),
    ).toEqual([
      {
        done: false,
      },
    ]);

    expect(
      filterList('all', todos),
    ).toEqual(todos);
  });
});
