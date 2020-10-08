import { Url } from './url.helper';

fdescribe('Url helper', () => {
  const apiUrl = '//localhost';

  it('should set static api url', () => {
    Url.setApiUrl(apiUrl);
    expect(Url.getResourceUrl('')).toEqual(apiUrl);
  });

  it('should add apiUrl only if needed', () => {
    expect(Url.getResourceUrl(apiUrl)).toEqual(apiUrl, 'apiUrl');
  });

  it('should parse route params', () => {
    expect(Url.getResourceUrl('path/:id', {id: 'test'})).toMatch(/\/path\/test$/);
  });

  it('should add query params', () => {
    expect(Url.getResourceUrl('path', {foo: 'bar'})).toMatch(/\/path\?foo=bar$/);
  });

  it('should add parts to end of path', () => {
    expect(Url.getResourceUrl('path', {f: 'b'}, '1/2', '3')).toMatch(/\/path\/1\/2\/3\?/);
  });

  it('should not add empty params', () => {
    const url = Url.getResourceUrl('path', {n: null, u: undefined, s: ' \n', o: {}, b: true});
    expect(url).toMatch(/\/path\?b=true$/);
  });

  it('should remove duplicated slashes', () => {
    expect(Url.getResourceUrl('/path//param/', {f: 'b'}, '/part/s', '/s')).not.toMatch(/.\/{2,}/);
  });

  it('should add array param elements separated by comma', () => {
    expect(Url.getResourceUrl('p/:val', {val: [1, 2], foo: ['bar', 'baz']})).toMatch(/\/p\/1,2\?foo=bar,baz$/);
  });

  it('should add flatten object params', () => {
    expect(Url.getResourceUrl('p', {f: 1, b: {k: 'v'}})).toMatch(/\/p\?f=1&b.k=v$/);
  });

  it('should remove empty route params', () => {
    expect(Url.getResourceUrl('p/:id')).toMatch(/\/p$/);
  });
});
