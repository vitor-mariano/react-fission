import { addLocaleData } from 'react-intl';
import * as R from 'ramda';
import locales from './locales';

addLocaleData(
  R.pipe(
    /* eslint-disable global-require, import/no-dynamic-require */
    R.map(locale => require(`react-intl/locale-data/${locale}`)),
    /* eslint-enable */
    R.unnest,
  )(locales),
);
