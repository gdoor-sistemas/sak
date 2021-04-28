/**
 * @dynamic
 */
export class StringsHelper {
  /**
   * Returns only the numbers of a string.
   */
  public static onlyNumbers(value: string): string {
    return value.replace(/[^\d]/g, '');
  }

  /**
   * Checks if a string has only numeric chars.
   */
  public static hasOnlyNumbers(value: string): boolean {
    return value.length && Boolean(value.match(/^\d+$/));
  }

  /**
   * Returns the passed string reversed.
   */
  public static reverse(value: string): string {
    return value.split('').reverse().join('');
  }

  /**
   * Inserts a string inside another.
   *
   * @param dest The destination string
   * @param subject The partial string that should be inserted
   * @param position The zero-based position index of `dest` that `subject` should be inserted
   * @param replace Indicates whether the inserted string should replace the chars where it will live
   */
  public static insert(dest: string, subject: string, position: number, replace = false): string {
    const pos = position + (replace ? subject.length : 0);
    return dest.substr(0, position) + subject + dest.substr(pos);
  }

  /**
   * Returns the string camelCased.
   */
  public static camelCased(value: string): string {
    return value.toLowerCase().replace(/[_\W]+\w/g, str => {
      return str.replace(/[_\W]+/, '').toUpperCase().trim();
    });
  }

  /**
   * Returns the string slug-cased or kebab-cased.
   */
  public static slugCased(value: string): string {
    return value.toLowerCase().replace(/[_\W]+/g, '-').replace(/^-|-$/g, '');
  }

  /**
   * Returns the string Title Cased.
   */
  public static titleCased(value: string): string {
    return value.replace(/\b(\w)/g, firstLetter => firstLetter.toUpperCase());
  }
}
