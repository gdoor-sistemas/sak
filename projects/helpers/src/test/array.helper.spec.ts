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

  it('should chunk the array', () => {
    expect(ArrayHelper.chunk([1, 0, 2, 5, 1], 2)).toEqual([[1, 0], [2, 5], [1]]);
  });

  it('should return a custom keyed object', () => {
    expect(ArrayHelper.keyBy([{ id: 1 }, { id: 2 }], 'id')).toEqual({
      1: { id: 1 },
      2: { id: 2 },
    });

    expect(ArrayHelper.keyBy([{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 1, name: 3 }], 'id')).toEqual({
      1: { id: 1, name: 3 },
      2: { id: 2, name: 2 },
    });
  });
});
