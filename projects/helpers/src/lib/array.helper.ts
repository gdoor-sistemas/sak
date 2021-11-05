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
}
