import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { PhonePipe } from './phone.pipe';

const pipes = [
  CpfCnpjPipe,
  PhonePipe,
];

@NgModule({
  declarations: pipes,
  exports: pipes,
  imports: [
    CommonModule,
  ],
})
export class PipesModule {
}
