import S from './reactsauce';

describe('ReactSauce', () => {
  test('stringifyArray', () => {
    expect(
      S.stringifyArray(['foo', 'bar']),
    ).toBe('foo bar');

    expect(
      S.stringifyArray([undefined, 'foo', null, 'bar']),
    ).toBe('foo bar');

    expect(
      S.stringifyArray(['foo']),
    ).toBe('foo');

    expect(
      S.stringifyArray(['foo', '']),
    ).toBe('foo');

    expect(
      S.stringifyArray([]),
    ).toBe('');
  });

  test('classes', () => {
    expect(
      S.classes({
        foo: true,
        bar: true,
        baz: false,
      }),
    ).toBe('foo bar');

    expect(
      S.classes({
        foo: false,
        bar: false,
      }),
    ).toBe('');
  });
});
