import { Pipe, PipeTransform } from '@angular/core';

import { Format } from '@gdoor/helpers';

@Pipe({name: 'cpfCnpj'})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string): string {
    return Format.cpfCnpj(value);
  }

}
