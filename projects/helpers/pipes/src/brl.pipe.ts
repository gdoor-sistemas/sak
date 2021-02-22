import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

import { Util } from '@gdoor/helpers';

@Pipe({name: 'brl'})
export class BrlPipe implements PipeTransform {
  public transform(value: any, precision: number = 2): string {
    if (isNaN(value) || Util.isNullOrUndefined(value)) {
      return value;
    }

    return formatCurrency(value, 'pt-br', 'R$\u00A0', 'BRL', `1.${precision}-${precision}`);
  }
}
