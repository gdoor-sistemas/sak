import { Component, Input } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormGroup, NgControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'gd-date-time-control',
  templateUrl: './date-time-control.component.html',
  styleUrls: ['./date-time-control.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: DateTimeControlComponent}],
})
export class DateTimeControlComponent implements MatFormFieldControl<Date> {
  @Input()
  public value: Date | null;

  public static nextId = 0;
  public readonly autofilled: boolean;
  public readonly controlType: string;
  public readonly disabled: boolean;
  public readonly empty: boolean;
  public readonly errorState: boolean;
  public readonly focused: boolean;
  public readonly id: string;
  public readonly ngControl: NgControl | null;
  public readonly placeholder: string;
  public readonly required: boolean;
  public readonly shouldLabelFloat: boolean;
  public readonly stateChanges: Observable<void>;
  public readonly userAriaDescribedBy: string;
  public readonly parts: FormGroup;

  public onContainerClick(event: MouseEvent): void {
  }

  public setDescribedByIds(ids: string[]): void {
  }
}
