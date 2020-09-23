import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialHomeComponent } from './home/material-home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MaterialHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {
}
