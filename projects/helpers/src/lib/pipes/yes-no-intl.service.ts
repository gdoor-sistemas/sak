import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GdYesNotIntl {
  public readonly yes: string = 'Sim';
  public readonly no: string = 'Não';
}

export function GD_YES_NO_INTL_PROVIDER_FACTORY(parentIntl: GdYesNotIntl): GdYesNotIntl {
  return parentIntl || new GdYesNotIntl();
}

export const GD_YES_NO_INTL_PROVIDER = {
  provide: GdYesNotIntl,
  deps: [[new Optional(), new SkipSelf(), GdYesNotIntl]],
  useFactory: GD_YES_NO_INTL_PROVIDER_FACTORY,
};

