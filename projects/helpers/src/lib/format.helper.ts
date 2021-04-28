import { StringsHelper as Str } from './strings.helper';

/**
 * Class to help formatting strings
 *
 * @dynamic
 */
export class Format {
  /**
   * Inserts the string `fill` to the left of `value` to reach the length of `size`
   */
  public static padLeft(value: string, fill: string, size: number): string {
    return (fill.repeat(size) + value).substr(-size);
  }

  /**
   * Adds the string `fill` to the right of `value` to reach the length of `size`
   */
  public static padRight(value: string, fill: string, size: number): string {
    return (value + fill.repeat(size)).substr(0, size);
  }

  /**
   * Formats a string as a CPF code
   */
  public static cpf(value: string): string {
    return this.padLeft(Str.onlyNumbers(value), '0', 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  /**
   * Formats a string as a CNPJ code
   */
  public static cnpj(value: string): string {
    return this.padLeft(Str.onlyNumbers(value), '0', 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  /**
   * Formats a string as a CPF or CNPJ code, depending on its length
   */
  public static cpfCnpj(value: string): string {
    switch (Str.onlyNumbers(value).length) {
      case 11:
        return this.cpf(value);

      case 14:
        return this.cnpj(value);

      default:
        return '';
    }
  }

  /**
   * Formats a string as a brazilian postal code
   */
  public static cep(value: string): string {
    return this.padLeft(Str.onlyNumbers(value), '0', 8).replace(/(\d{5})(\d{3})/g, '$1-$2');
  }

  /**
   * Formats a string as a NF-e key
   */
  public static nfeKey(value: string): string {
    return this.padLeft(Str.onlyNumbers(value), '0', 44)
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1.$2.$3.$4.$5.$6.$7.$8.$9.$10.$11');
  }

  /**
   * Formats a string as an NCM code
   */
  public static ncm(value: string): string {
    return this.padRight(Str.onlyNumbers(value), '0', 8).replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
  }

  /**
   * Formats a string as an CEST code
   */
  public static cest(value: string): string {
    return this.padRight(Str.onlyNumbers(value), '0', 7).replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2.$3');
  }

  /**
   * Formats a string as a brazilian known phone number
   */
  public static phone(value: string): string {
    let clearValue = Str.onlyNumbers(value);
    const exp0800 = /(\d{4})(\d{3})(\d{4})/;
    const mask0800 = '$1 $2 $3';

    const expTel = /(\d{2})(\d{4,5})(\d{4})/;
    const maskTel = '(0$1) $2-$3';

    const expNoArea = /(\d{4,5})(\d{4})/;
    const maskTelNoArea = '$1-$2';

    if (['0300', '0800'].includes(clearValue.substr(0, 4))) {
      return clearValue.replace(exp0800, mask0800);
    }

    // removes leading zeros
    clearValue = clearValue.replace(/^0+/, '');

    if (clearValue.length < 10) {
      return clearValue.replace(expNoArea, maskTelNoArea);
    }

    return clearValue.replace(expTel, maskTel);
  }
}
