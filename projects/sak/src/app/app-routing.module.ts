import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'helpers', loadChildren: () => import('./helpers/helpers.module').then(m => m.HelpersModule)},
  {path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
