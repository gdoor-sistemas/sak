import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdPipesModule } from '@gdoor/helpers/pipes';

import { HelpersRoutingModule } from './helpers-routing.module';
import { HelpersHomeComponent } from './home/helpers-home.component';

@NgModule({
  declarations: [HelpersHomeComponent],
  imports: [
    CommonModule,
    HelpersRoutingModule,
    GdPipesModule,
  ]
})
export class HelpersModule { }
