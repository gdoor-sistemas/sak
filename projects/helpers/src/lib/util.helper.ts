/**
 * @dynamic
 */
export class Util {
  /**
   * Retorna `true` se TODOS os itens forem equivalentes a NULO ou INDEFINIDO
   */
  public static areNullOrUndefined(...values): boolean {
    return values.every(item => Util.isNullOrUndefined(item));
  }

  /**
   * Retorna `true` se UM DOS itens for equivalente a NULO ou INDEFINIDO
   */
  public static isAnyNullOrUndefined(...values): boolean {
    return values.some(item => Util.isNullOrUndefined(item));
  }

  /**
   *
   */
  public static isNullOrUndefined(val): boolean {
    return (val === null) || (typeof val === 'undefined');
  }

  /**
   *
   */
  public static isNotNullOrUndefined(val): boolean {
    return !Util.isNullOrUndefined(val);
  }

  /**
   * Verifica se o valor é equivalente a vazio
   */
  public static isEmpty(val): boolean {
    if (Util.isObject(val) && JSON.stringify(val) === '{}') {
      return true;
    }

    return [
      null,
      undefined,
      '',
      [],
      // tslint:disable-next-line:triple-equals
    ].some(i => val == i);
  }

  /**
   *
   */
  public static isString(val): boolean {
    return typeof val === 'string';
  }

  /**
   *
   */
  public static isObject(val): boolean {
    return (typeof val === 'object') && (val !== null) && !Array.isArray(val);
  }

  /**
   *
   */
  public static isFunction(val): boolean {
    return typeof val === 'function';
  }

  /**
   *
   */
  public static isMac(): boolean {
    return !!navigator.platform.match(/mac\s?os/gi);
  }

  /**
   *
   */
  public static userAgent(): 'Chrome' | 'Edge' | 'Firefox' | 'Other' {
    if (navigator.userAgent.match('Edge')) {
      return 'Edge';
    }

    if (navigator.userAgent.match('Firefox')) {
      return 'Firefox';
    }

    if (navigator.userAgent.match('Firefox')) {
      return 'Firefox';
    }

    if (navigator.userAgent.match('Chrome')) {
      return 'Chrome';
    }

    return 'Other';
  }

  /**
   *
   */
  public static isChromeAndroid(): boolean {
    return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
  }

  /**
   * Retorna o valor dentro de um array, ou um array vazio se o valor for equivalente a falso
   */
  public static asArray<T = any>(value: T | T[]): Array<T> {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  }

  /**
   * Retorna um objeto de um nível apenas. Exemplo:
   * ```
   * {
   *   foo: 'bar',
   *   child: {
   *     foo: 'baz',
   *     key: 'value'
   *   }
   * }
   * ```
   *
   * Vira:
   * ```
   * {
   *   foo: 'bar',
   *   child.foo: 'baz',
   *   child.key: 'value'
   * }
   * ```
   */
  public static flatObject(obj: any): { [key: string]: any } {
    const result: any = {};

    Object.entries<any>(obj)
      .map(e => ({key: e[0], value: e[1]}))
      .forEach(({key, value}) => {
        if (!Util.isObject(value)) {
          return result[key] = value;
        }

        if (Util.isEmpty(value)) {
          return;
        }

        value = Util.flatObject(value);
        Object.keys(value).forEach(l => {
          result[`${key}.${l}`] = value[l];
        });
      });

    return result;
  }

  /**
   * Retorna um inteiro aleatório entre 0 e `max`
   * @param max Teto da randomização
   */
  public static random(max: number): number {
    return Math.min(Math.floor(Math.random() * (max + 1)), max);
  }

  /**
   * Compara duas strings de versionamento.
   * Retornos:
   * a > b = 1
   * a < b = -1
   * a == b = 0
   */
  public static compareVersions(versionA: string, versionB: string): number {
    // tslint:disable:no-bitwise
    // treat non-numerical characters as lower version
    // replacing them with a negative number based on charcode of each character
    const fix = s => '.' + (s.toLowerCase().charCodeAt(0) - 65536) + '.';

    const va: any[] = ('' + versionA).replace(/[^0-9.]/g, fix).split('.');
    const vb: any[] = ('' + versionB).replace(/[^0-9.]/g, fix).split('.');
    for (let i = 0, c = Math.max(versionA.length, versionB.length); i < c; i++) {
      // convert to integer the most efficient way
      va[i] = ~~va[i];
      vb[i] = ~~vb[i];

      if (versionA[i] > versionB[i]) {
        return 1;
      }

      if (versionA[i] < versionB[i]) {
        return -1;
      }
    }

    return 0;
  }
}
