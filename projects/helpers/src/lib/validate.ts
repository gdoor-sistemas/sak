export class Validate {
  /**
   *
   */
  public static cpf(value: string): boolean {
    if (value.replace(/[^\d\.-]/g, '') !== value) {
      return false;
    }

    value = value.replace(/[^\d]/g, '');

    if (value.length !== 11 || !Array.from(value).filter(e => e !== value[0]).length) {
      return false;
    }

    let sum = 0;
    let rest;

    if (value === '00000000000') {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      sum = sum + +value.substring(i - 1, i) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }

    if (rest !== +value.substring(9, 10)) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + +value.substring(i - 1, i) * (12 - i);
    }
    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }

    return rest === +value.substring(10, 11);
  }
}
