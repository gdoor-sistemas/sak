import { Pipe, PipeTransform } from '@angular/core';

import { Format } from '@gdoor/helpers';

@Pipe({name: 'cest'})
export class CestPipe implements PipeTransform {
  public transform(value: string): string {
    return value && Format.cest(value);
  }
}
