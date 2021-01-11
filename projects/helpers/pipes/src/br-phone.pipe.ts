import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Util } from '@gdoor/helpers';
import { Format } from '@gdoor/helpers';
import { Str } from '@gdoor/helpers';

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
