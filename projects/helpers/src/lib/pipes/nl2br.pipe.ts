import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({name: 'nl2br'})
export class Nl2BrPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    if (!value) {
      return '';
    }

    const result = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');

    return result
           ? this.sanitizer.bypassSecurityTrustHtml(result)
           : value;
  }
}
