import { Pipe, PipeTransform } from '@angular/core';

import { Format } from '@gdoor/helpers';

@Pipe({name: 'cpfCnpj'})
export class CpfCnpjPipe implements PipeTransform {
  public transform(value: string): string {
    return value && Format.cpfCnpj(value);
  }
}
