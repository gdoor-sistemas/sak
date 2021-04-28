/**
 * @dynamic
 */
export class Number {
  /**
   * Rounds a decimal number with the provided precision
   */
  public static rMoney(value: number, precision = 2): number {
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  }

  /**
   * Returns if a `needle` is between `start` and `end`. Returns `true` if the value is equals to `start` or `end` params.
   */
  public static isBetween(needle: number, start: number, end: number): boolean {
    return (needle >= start) && (needle <= end);
  }

  /**
   * Syntactic sugar for returning opposite value of #isBetween.
   *
   * @see Number.isBetween
   */
  public static isNotBetween(needle: number, start: number, end: number): boolean {
    return !this.isBetween.apply(null, arguments);
  }
}
