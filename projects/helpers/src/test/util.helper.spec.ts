import { Util } from '../lib';

describe('Util helper', () => {
  it('should check if value is null or undefined', () => {
    const truthy = [null, undefined];
    expect(truthy.every(v => Util.isNullOrUndefined(v))).toBe(true, 'isNullOrUndefined');

    const falsy = ['', false, 0, [], {}];
    expect(falsy.every(v => Util.isNotNullOrUndefined(v))).toBe(true, 'isNotNullOrUndefined');
  });

  it('should check if all items are null or undefined', () => {
    const values = [null, undefined, null];
    expect(Util.areNullOrUndefined(...values)).toBeTrue();
  });

  it('should check if any items are null or undefined', () => {
    let values: any[] = ['null', undefined, 0];
    expect(Util.isAnyNullOrUndefined(...values)).toBeTrue();

    values = ['', false, 0];
    expect(Util.isAnyNullOrUndefined(...values)).toBeFalse();
  });

  it('should check if value is empty', () => {
    expect(Util.isEmpty({})).toBe(true, '{}');
    expect(Util.isEmpty([])).toBe(true, '[]');
    expect(Util.isEmpty(null)).toBe(true, 'null');
    expect(Util.isEmpty(undefined)).toBe(true, 'undefined');
    expect(Util.isEmpty('')).toBe(true, '\'\'');
  });

  it('should check if value is a string', () => {
    expect(Util.isString('')).toBeTrue();
    expect(Util.isString(1)).toBeFalse();
  });

  it('should check if value is an object', () => {
    expect(Util.isObject({})).toBe(true, '{}');
    expect(Util.isObject([])).toBe(false, '[]');
    expect(Util.isObject(null)).toBe(false, 'null');
    expect(Util.isObject(undefined)).toBe(false, 'undefined');
  });

  it('should check if value is a function', () => {
    expect(Util.isFunction(() => {})).toBe(true, '() => {}');
    expect(Util.isFunction({})).toBe(false, '{}');
  });

  it('should wrap value into an array', () => {
    expect(Util.asArray(null)).toEqual([], 'null');
    expect(Util.asArray('')).toEqual([], '\'\'');
    expect(Util.asArray(['val'])).toEqual(['val'], '[\'val\']');
    expect(Util.asArray('val')).toEqual(['val'], '\'val\'');
  });

  it('should flat an object', () => {
    const o = {
      foo: 'bar',
      baz: {
        key: 'value',
        null: null,
      },
      arrays: {
        first: [1, 3],
        object: [
          {index: 5},
          {index: 2},
        ]
      },
      empty: {},
    };

    const expectedWithArrays = {
      foo: 'bar',
      'baz.key': 'value',
      'baz.null': null,
      'arrays.first.0': 1,
      'arrays.first.1': 3,
      'arrays.object.0.index': 5,
      'arrays.object.1.index': 2,
    };

    const expectedWithoutArrays = {
      foo: 'bar',
      'baz.key': 'value',
      'baz.null': null,
      'arrays.first': [1, 3],
      'arrays.object': [
        {index: 5},
        {index: 2},
      ],
    };

    expect(Util.flatObject(o, true)).toEqual(expectedWithArrays);
    expect(Util.flatObject(o)).toEqual(expectedWithoutArrays);
  });

  it('should correctly compare 2 versions', () => {
    expect(Util.compareVersions('1.0.0', '1.0')).toEqual(0);
    expect(Util.compareVersions('1.0.0', '1.1')).toEqual(-1);
    expect(Util.compareVersions('1.0.0', '1.0-alpha')).toEqual(1);
    expect(Util.compareVersions('1.0', '2.0')).toEqual(-1);
    expect(Util.compareVersions('3.0', '2.0')).toEqual(1);
  });

  it('should check if objects are equal', () => {
    expect(Util.areDeepEqual({foo: 'bar', baz: 'foo'}, {baz: 'foo', foo: 'bar'})).toBe(true, '2 equal raw shallow objects');
    expect(Util.areDeepEqual({foo: 'bar'}, {baz: 'foo', foo: 'bar'})).toBe(false, '2 different shallow objects');

    expect(Util.areDeepEqual(
      {foo: 'bar', baz: {baz: 'foo', array: [1, 2, 3]}},
      {baz: {baz: 'foo', array: [1, 2, 3]}, foo: 'bar'},
    )).toBe(true, '2 equal raw complex objects');
  });

  it('should create a entirely new object', () => {
    const obj = {foo: 'bar'};
    const obj2 = Util.deepClone(obj);
    obj2.foo = 'baz';

    expect(obj.foo).toBe('bar');
  });

  it('should create a entirely new array', () => {
    const arr: any[] = [1, 2, 3, [4, 5, 6], {a: [1, 2, 3]}];
    const arr2: any[] = Util.deepClone(arr);
    arr2.unshift(0);
    arr2.splice(4, 1);
    arr2[4].a.push(2);

    expect(Array.isArray(arr2)).toBeTrue();
    expect(arr.length).toBe(5);
    expect(arr[4].a.length).toBe(3);
  });
});
