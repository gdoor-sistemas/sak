import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'char'})
export class CharPipe implements PipeTransform {
  public transform(value: number): string {
    return isNaN(value) ? '' : String.fromCharCode(value).toUpperCase();
  }
}
