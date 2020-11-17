import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ConfirmDialogModalComponent } from './modal/confirm-dialog-modal.component';

@NgModule({
  declarations: [ConfirmDialogModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ConfirmDialogModule {}
