import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Format, Str } from '@gdoor/helpers';

@Pipe({name: 'brPhone'})
export class BrPhonePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  public transform(value: string | number, link = false): string | SafeHtml {
    if (!value) {
      return '';
    }

    value = Format.phone(String(value));

    return link
           ? this._sanitizer.bypassSecurityTrustHtml(`<a class="link" href="tel:${Str.onlyNumbers(value)}">${value}</a>`)
           : value;
  }
}
