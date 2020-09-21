/**
 * @dynamic
 */
export class Str {
  public static onlyNumbers(value: string): string {
    return value.replace(/[^0-9]/g, '');
  }

  public static hasOnlyNumbers(value: string): boolean {
    return value.length && (value.replace(/[0-9]/g, '') === '');
  }

  public static reverse(value: string): string {
    return value.split('').reverse().join('');
  }

  public static insert(dest: string, subject: string, position: number, replace = false): string {
    const pos = position + (replace ? subject.length : 0);
    return dest.substr(0, position) + subject + dest.substr(pos);
  }
}
