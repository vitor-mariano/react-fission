import { getLocale } from './';

describe('Root Functions', () => {
  test('getLocale', () => {
    const messages = {
      en: {},
      pt: {},
    };

    expect(
      getLocale('en', 'pt', messages),
    ).toBe('en');

    expect(
      getLocale('pt-BR', 'en', messages),
    ).toBe('pt');

    expect(
      getLocale('es', 'en', messages),
    ).toBe('en');
  });
});
