import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Util } from '../util.helper';
import { Format } from '../format.helper';
import { Str } from '../str.helper';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, link = false): string | SafeHtml {
    if (!Util.isString(value) || !value) {
      return '';
    }

    value = Format.phone(value);
    if (!link) {
      return value;
    }

    return this.sanitizer.bypassSecurityTrustHtml(
      `<a class="link" href="tel:${Str.onlyNumbers(value)}">${value}</a>`,
    );
  }
}
