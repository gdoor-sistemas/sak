import { HttpParams } from '@angular/common/http';

import { Util } from './util.helper';

/**
 * @dynamic
 */
export class Url {
  protected static apiUrl: string;

  /**
   * Define a URL a ser usada para montar os endpoints
   */
  public static setApiUrl(value: string): void {
    this.apiUrl = value;
  }

  /**
   * Monta a URL com os parâmetros
   */
  private static _getInterpolatedUrl(path: string, obj?: any, ...parts: string[]): string {
    // adiciona partes extras ao final do path
    path = '/' + path.concat('/', parts.join('/')).split('/').filter(Boolean).join('/');

    if (obj) {
      const params = Util.flatObject(obj);
      let httpParams = new HttpParams();

      Object.entries<string>(params)
        .map(e => ({key: e[0], value: e[1]}))
        .filter(this._isValid)
        .forEach(({key, value}) => {
          // se é um parâmetro de rota, substitui
          if (path.match(new RegExp(`/:${key}`))) {
            return path = path.replace(`/:${key}`, `/${value}`);
          }

          // adiciona se for parâmetro de query string
          httpParams = httpParams.append(key, value);
        });

      if (httpParams.keys().length) {
        path += `?${httpParams}`;
      }
    }

    // remove parâmetros de rota não preenchidos
    return path.replace(/\/:\w+/g, '').replace(/\/$/, '');
  }

  /**
   * Checa se o valor do parâmetro é válido para ser adicionado à URL
   */
  private static _isValid({value}): boolean {
    return Util.isNotNullOrUndefined(value) && (String(value).trim() !== '');
  }

  /**
   * Retorna a URL com o path e os params aplicados
   */
  public static getResourceUrl(path: string, identifiers?: any, ...parts: string[]): string {
    if (path.startsWith(this.apiUrl)) {
      path = path.replace(this.apiUrl, '');
    }

    path = this._getInterpolatedUrl(path, identifiers, ...parts);

    return `${this.apiUrl}${path}`;
  }
}
