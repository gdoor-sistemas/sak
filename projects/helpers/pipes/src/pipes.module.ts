import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { BrPhonePipe } from './br-phone.pipe';
import { Nl2BrPipe } from './nl2br.pipe';
import { NcmPipe } from './ncm.pipe';
import { CestPipe } from './cest.pipe';
import { AbsPipe } from './abs.pipe';
import { ActiveInactivePipe } from './active-inactive.pipe';
import { GD_ACTIVE_INACTIVE_INTL_PROVIDER } from './active-inactive-intl.service';
import { CharPipe } from './char.pipe';
import { BrlPipe } from './brl.pipe';
import { YesNoPipe } from './yes-no.pipe';
import { GD_YES_NO_INTL_PROVIDER } from './yes-no-intl.service';
import { PercentValuePipe } from './percent-value.pipe';

const pipes = [
  CpfCnpjPipe,
  BrPhonePipe,
  Nl2BrPipe,
  NcmPipe,
  CestPipe,
  AbsPipe,
  ActiveInactivePipe,
  CharPipe,
  BrlPipe,
  YesNoPipe,
  PercentValuePipe,
];

@NgModule({
  declarations: pipes,
  exports: pipes,
  imports: [
    CommonModule,
  ],
  providers: [
    GD_ACTIVE_INACTIVE_INTL_PROVIDER,
    GD_YES_NO_INTL_PROVIDER,
  ],
})
export class GdPipesModule {}
