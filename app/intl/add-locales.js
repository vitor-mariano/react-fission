import { addLocaleData } from 'react-intl';
import * as R from 'ramda';
import locales from './locales';

addLocaleData(
  R.pipe(
    R.values,
    R.unnest,
  )(locales),
);
