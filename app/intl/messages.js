import * as R from 'ramda';
import dot from 'dot-object';
import locales from './locales';

export default R.pipe(
  R.keys,
  R.map(locale => R.assoc(
    locale,
    /* eslint-disable global-require, import/no-dynamic-require */
    dot.dot(require(`./translations/${locale}.json`)),
    /* eslint-enable */
    {},
  )),
  R.reduce(R.merge, {}),
)(locales);
