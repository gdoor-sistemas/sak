/**
 * @dynamic
 */
export class StringsHelper {
  public static onlyNumbers(value: string): string {
    return value.replace(/[^\d]/g, '');
  }

  public static hasOnlyNumbers(value: string): boolean {
    return value.length && Boolean(value.match(/^\d+$/));
  }

  public static reverse(value: string): string {
    return value.split('').reverse().join('');
  }

  public static insert(dest: string, subject: string, position: number, replace = false): string {
    const pos = position + (replace ? subject.length : 0);
    return dest.substr(0, position) + subject + dest.substr(pos);
  }
}
