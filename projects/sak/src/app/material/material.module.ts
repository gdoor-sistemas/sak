import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GdConfirmDialogModule } from '@gdoor/material/confirm';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialHomeComponent } from './home/material-home.component';

@NgModule({
  declarations: [MaterialHomeComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    GdConfirmDialogModule,
  ],
})
export class MaterialModule {}
