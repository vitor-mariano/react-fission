import { addLocaleData } from 'react-intl';
import R from 'ramda';
import locales from './locales';

addLocaleData(
  R.pipe(
    /* eslint-disable */
    R.map(locale => require(`react-intl/locale-data/${locale}`)),
    /* eslint-enable */
    R.unnest,
  )(locales),
);
