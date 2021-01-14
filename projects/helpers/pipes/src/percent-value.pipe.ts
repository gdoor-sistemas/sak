import { Pipe, PipeTransform } from '@angular/core';
import { formatPercent } from '@angular/common';

import { Util } from '@gdoor/helpers';

function getDigitsInfo(param: number | string): string {
  switch (typeof param) {
    case 'string':
      return param;

    case 'number':
      return `1.${param}-${param}`;

    default:
      return '1.2-2';
  }
}

@Pipe({name: 'percentValue'})
export class PercentValuePipe implements PipeTransform {
  public transform(value: any, param?: number | string): string {
    if (isNaN(value) || Util.isNullOrUndefined(value)) {
      return value;
    }

    const digitsInfo = getDigitsInfo(param);

    return formatPercent(value / 100, 'pt-br', digitsInfo);
  }
}
