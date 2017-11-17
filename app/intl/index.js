import * as R from 'ramda';

export const getLocale = (locale, defaultLocale, messages) => R.cond([
  [
    R.flip(R.has)(messages),
    R.identity,
  ],
  [
    R.pipe(
      R.take(2),
      R.flip(R.has)(messages),
    ),
    R.take(2),
  ],
  [
    R.T,
    R.always(defaultLocale),
  ],
])(locale);
