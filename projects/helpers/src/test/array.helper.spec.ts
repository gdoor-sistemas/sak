import { ArrayHelper } from '../lib/array.helper';

describe('Array helper', () => {
  it('should return the first element of an array', () => {
    expect(ArrayHelper.first([5, 3])).toBe(5);
  });

  it('should return null when passing an empty array or an invalid argument', () => {
    expect(ArrayHelper.first([])).toBeNull('empty array');
    expect(ArrayHelper.first(' ' as any)).toBeNull('string');
    expect(ArrayHelper.first(false as any)).toBeNull('string');
  });

  it('should return the last element of an array', () => {
    expect(ArrayHelper.last([5, 3])).toBe(3);
  });

  it('should return null when passing an empty array or an invalid argument', () => {
    expect(ArrayHelper.last([])).toBeNull('empty array');
    expect(ArrayHelper.last(' ' as any)).toBeNull('string');
    expect(ArrayHelper.last(false as any)).toBeNull('string');
  });

  it('should remove duplicated values', () => {
    expect(ArrayHelper.distinct([1, 0, 2, 5, 1])).toEqual([1, 0, 2, 5]);
    expect(ArrayHelper.distinct([1, 0, 2, 5, '1'])).toEqual([1, 0, 2, 5, '1']);
  });
});
