import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DateTimeControlComponent } from './date-time-control.component';

@NgModule({
  declarations: [DateTimeControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [DateTimeControlComponent],
})
export class DateTimeControlModule {
}
