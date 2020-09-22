import { Pipe, PipeTransform } from '@angular/core';

import { Format } from '../format.helper';

@Pipe({name: 'ncm'})
export class NcmPipe implements PipeTransform {
  public transform(value: string): string {
    return value && Format.ncm(value);
  }
}
