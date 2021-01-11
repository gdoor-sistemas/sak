import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { PipesModule } from '@gdoor/helpers/pipes';
import { HelpersHomeComponent } from './home/helpers-home.component';


@NgModule({
  declarations: [HelpersHomeComponent],
  imports: [
    CommonModule,
    HelpersRoutingModule,
    PipesModule,
  ]
})
export class HelpersModule { }
