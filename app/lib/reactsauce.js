import * as R from 'ramda';

class ReactSauce {
  static classes(obj) {
    return R.pipe(
      R.filter(R.identity),
      R.keys(),
      ReactSauce.stringifyArray,
    )(obj);
  }

  static stringifyArray(arr) {
    return R.pipe(
      R.filter(
        R.is(String),
      ),
      R.filter(
        R.compose(R.not, R.isEmpty),
      ),
      R.join(' '),
    )(arr);
  }
}

export default ReactSauce;
