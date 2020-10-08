import { Pipe, PipeTransform } from '@angular/core';

import { GdActiveInactiveIntl } from './active-inactive-intl.service';

@Pipe({name: 'activeInactive'})
export class ActiveInactivePipe implements PipeTransform {
  constructor(private _labels: GdActiveInactiveIntl) {}

  public transform(value: any, genre: 'm' | 'f' = 'm', lowerCase = false): string {
    const attrName = (value ? '' : 'in') + `active${genre === 'm' ? 'Male' : 'Female'}Label`;
    const label = this._labels[attrName];
    return lowerCase ? label.toLowerCase() : label;
  }
}
