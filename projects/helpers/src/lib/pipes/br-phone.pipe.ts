import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Util } from '../util.helper';
import { Format } from '../format.helper';
import { Str } from '../str.helper';

@Pipe({name: 'brPhone'})
export class BrPhonePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  public transform(value: string, link = false): string | SafeHtml {
    if (!Util.isString(value) || !value) {
      return '';
    }

    value = Format.phone(value);

    return link
           ? this._sanitizer.bypassSecurityTrustHtml(`<a class="link" href="tel:${Str.onlyNumbers(value)}">${value}</a>`)
           : value;
  }
}
