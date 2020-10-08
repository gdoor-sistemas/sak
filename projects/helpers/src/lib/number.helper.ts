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
}
