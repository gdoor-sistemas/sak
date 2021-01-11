import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abs'})
export class AbsPipe implements PipeTransform {
  public transform(value: any): number {
    return isNaN(value) ? 0 : Math.abs(value);
  }
}
