import {
  Component,
  ElementRef,
  Inject,
  Input,
  LOCALE_ID,
  OnChanges,
  OnDestroy,
  Optional,
  Self,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { formatDate } from '@angular/common';

@Component({
  selector: 'gd-date-time-control',
  templateUrl: './date-time-control.component.html',
  styleUrls: ['./date-time-control.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: DateTimeControlComponent}],
})
export class DateTimeControlComponent implements ControlValueAccessor, MatFormFieldControl<Date>, OnChanges, OnDestroy {
  public static nextId = 0;

  @ViewChild('date') public dateInput: HTMLInputElement;
  @ViewChild('time') public timeInput: HTMLInputElement;

  @Input()
  public get value(): Date | null {
    if (this.parts.valid) {
      const {date, time} = this.parts.value;
      return new Date(`${date} ${time}`);
    }

    return null;
  }

  public set value(value: Date | null) {
    let date = null;
    let time = null;

    if (value instanceof Date) {
      date = formatDate(value, 'yyyy-MM-dd', this.locale);
      time = formatDate(value, 'HH:mm:ss', this.locale);
    }

    this.parts.setValue({date, time});

    this.stateChanges.next();
  }

  // tslint:disable-next-line:no-input-rename
  @Input('aria-describedby')
  public userAriaDescribedBy: string;

  @Input()
  public placeholder: string;

  @Input()
  public disabled: boolean;

  @Input()
  public required: boolean;

  public readonly parts: FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    time: new FormControl(null, [Validators.required]),
  });

  public id = `gd-date-time-control-${DateTimeControlComponent.nextId++}`;

  public stateChanges: Subject<void> = new Subject<void>();

  public autofilled: boolean;

  public focused = false;

  public controlType = 'gd-date-time';

  public get errorState(): boolean {
    return this.parts.invalid && this.parts.dirty;
  }

  public onChange = (_: any) => {};

  public onTouched = () => {};

  public get empty(): boolean {
    const {date, time} = this.parts.value;
    return !(date || time);
  }

  public get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  constructor(private _focusMonitor: FocusMonitor,
              private _elementRef: ElementRef<HTMLElement>,
              @Optional() @Inject(MAT_FORM_FIELD) public formField: MatFormField,
              @Optional() @Self() public ngControl: NgControl,
              @Inject(LOCALE_ID) public readonly locale: string) {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public setDescribedByIds(ids: string[]): void {
    const controlElement = this._elementRef.nativeElement.querySelector('.gd-date-time-control-wrapper');
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  //region Lifecycle events
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.placeholder) {
      this.stateChanges.next();
    }

    if (changes.required) {
      this.required = coerceBooleanProperty(changes.required.currentValue);
      this.stateChanges.next();
    }

    if (changes.disabled) {
      this.disabled = coerceBooleanProperty(changes.disabled.currentValue);
      this.disabled ? this.parts.disable() : this.parts.enable();
      this.stateChanges.next();
    }
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  //endregion

  //region Behaviour controls
  public autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  public autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  public onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() === 'input') {
      return;
    }

    if (this.parts.controls.date.valid) {
      this._focusMonitor.focusVia(this.timeInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.dateInput, 'program');
    }
  }

  public handleInput(control: AbstractControl, next?: HTMLInputElement): void {
    this.autoFocusNext(control, next);
    this.onChange(this.value);
  }

  //endregion

  // region ControlValueAccessor implementations
  public writeValue(tel: Date | null): void {
    this.value = tel;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // endregion

}
