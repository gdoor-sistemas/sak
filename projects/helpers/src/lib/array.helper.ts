/**
 * @dynamic
 */
export class ArrayHelper {
  /**
   * Returns the first element of an array. If is passed an empty array or not an array, returns `null`.
   */
  public static first<T = any>(array: T[]): T | null {
    return (Array.isArray(array) && array[0]) || null;
  }

  /**
   * Returns the last element of an array. If is passed an empty array or not an array, returns `null`.
   */
  public static last<T = any>(array: T[]): T | null {
    return (Array.isArray(array) && array[array.length - 1]) || null;
  }

  /**
   * Returns a new array with the duplicated values removed making strict type comparison.
   */
  public static distinct<T = any>(array: T[]): T[] {
    return array.filter((value, currIndex, self) => self.indexOf(value) === currIndex);
  }

  /**
   * Generates a list chunked by the given size.
   */
  public static chunk<T>(array: T[], chunkSize: number): T[][] {
    const result = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }

    return result;
  }

  /**
   * Returns an object keyed by the given key.
   * Example:
   * ```ts
   * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
   * const key = 'id';
   * const result = ArrayHelper.keyBy(array, key);
   * // result = { 1: { id: 1, name: 'John' }, 2: { id: 2, name: 'Jane' } };
   * ```
   */
  public static keyBy<T>(list: T[], key: string): { [index: string]: T } {
    const result: { [index: string]: T } = {};

    list.forEach(item => {
      const keyType = typeof item[key];
      if (['string', 'number'].includes(keyType)) {
        result[item[key]] = item;
      }
    });

    return result;
  }

  /**
   * Returns the value in an array, or an empty array if the value is equivalent to false.
   */
  public static wrap<T>(value: T | T[]): Array<T> {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  }
}
