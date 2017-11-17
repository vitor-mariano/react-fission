import * as R from 'ramda';

export const countTodosBy = (done, todos) => R.pipe(
  R.countBy(R.prop('done')),
  R.prop(R.toString(done)),
  R.defaultTo(0),
)(todos);

export const filterList = (filter, list) => R.cond([
  [R.equals('active'), () => R.filter(R.compose(R.not, R.prop('done')), list)],
  [R.equals('completed'), () => R.filter(R.prop('done'), list)],
  [R.T, R.always(list)],
])(filter);
