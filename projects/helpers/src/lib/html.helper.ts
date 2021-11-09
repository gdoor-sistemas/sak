import { decode, encode } from 'html-entities';

export class HtmlHelper {
  /**
   * Replaces the special non-Ascii Printable chars for their HTML Entity equivalents.
   */
  public static encodeHTMLEntities(value: string): string {
    return encode(value, {mode: 'nonAsciiPrintable', level: 'html5'});
  }

  /**
   * Replaces the HTML Entities chars for their special non-Ascii Printable equivalents.
   */
  public static decodeHTMLEntities(value: string): string {
    return decode(value, {level: 'html5'});
  }
}
