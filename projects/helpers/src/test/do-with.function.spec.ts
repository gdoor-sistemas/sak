import { doWith } from '../lib';

describe('doWith function', () => {
  it('should run the callback', () => {
    let foo;

    doWith(null, () => (foo = 'bar'));

    expect(foo).toBe('bar');
  });

  it('should pass the value to the callback', () => {
    let foo;

    doWith('bar', value => (foo = value));

    expect(foo).toBe('bar');
  });

  it('should return the value', () => {
    const foo = doWith('bar', () => 'baz');

    expect(foo).toBe('bar');
  });

  it('should return the value (referenced)', () => {
    const foo = doWith({ foo: 'bar' }, obj => obj.foo += '-baz');

    expect(foo).toEqual({ foo: 'bar-baz' });
  });
});
