import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateTimeControlModule } from '@gdoor/material';
import { FormsModule } from '@angular/forms';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialHomeComponent } from './home/material-home.component';


@NgModule({
  declarations: [MaterialHomeComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatFormFieldModule,
    DateTimeControlModule,
    FormsModule,
  ],
})
export class MaterialModule { }
