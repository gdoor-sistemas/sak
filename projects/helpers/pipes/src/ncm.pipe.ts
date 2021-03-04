import { Pipe, PipeTransform } from '@angular/core';

import { Format } from '@gdoor/helpers';

@Pipe({name: 'ncm'})
export class NcmPipe implements PipeTransform {
  public transform(value: string): string {
    return value && Format.ncm(String(value));
  }
}
