import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from '@gdoor/material';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialHomeComponent } from './home/material-home.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MaterialHomeComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ConfirmDialogModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
