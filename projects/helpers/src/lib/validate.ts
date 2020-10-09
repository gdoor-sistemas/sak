export class Validate {
  /**
   *
   */
  public static cpf(value: string): boolean {
    if (value.replace(/[^\d\.\-]/g, '') !== value) {
      return false;
    }

    value = value.replace(/[^\d]/g, '');

    if (value.length !== 11 || !Array.from(value).filter(e => e !== value[0]).length) {
      return false;
    }

    let sum = 0;
    let rest;

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

  /**
   *
   */
  public static cnpj(value: string): boolean {
    if (value.replace(/[^\d\.\-\/]/g, '') !== value) {
      return false;
    }

    value = value.replace(/[^\d]/g, '');

    if (value.length !== 14 || !Array.from(value).filter(e => e !== value[0]).length) {
      return false;
    }

    // validate verifier digits
    let size = value.length - 2;
    let numbers = value.substring(0, size);
    const verifiers = value.substring(size);
    let soma = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
      soma += +numbers.charAt(size - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let result = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (result !== +verifiers.charAt(0)) {
      return false;
    }

    size = size + 1;
    numbers = value.substring(0, size);
    soma = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      soma += +numbers.charAt(size - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    result = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return result === +verifiers.charAt(1);
  }
}
