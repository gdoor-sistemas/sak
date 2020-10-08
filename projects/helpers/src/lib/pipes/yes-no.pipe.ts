import { Pipe, PipeTransform } from '@angular/core';

import { GdYesNotIntl } from './yes-no-intl.service';

@Pipe({name: 'yesNo'})
export class YesNoPipe implements PipeTransform {
  constructor(private _labels: GdYesNotIntl) {}

  public transform(value: boolean): string {
    return value ? this._labels.yes : this._labels.no;
  }
}
