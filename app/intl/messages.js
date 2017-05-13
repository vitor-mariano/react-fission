import R from 'ramda';
import dot from 'dot-object';
import locales from './locales';

export default R.pipe(
  R.map(locale => R.assoc(
    locale,
    /* eslint-disable */
    dot.dot(require(`./translations/${locale}.json`)),
    /* eslint-enable */
    {},
  )),
  R.reduce(R.merge, {}),
)(locales);
