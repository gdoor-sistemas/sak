import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { PhonePipe } from './phone.pipe';
import { Nl2BrPipe } from './nl2br.pipe';

const pipes = [
  CpfCnpjPipe,
  PhonePipe,
  Nl2BrPipe,
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
