import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GdActiveInactiveIntl {
  public readonly activeMaleLabel: string = 'Ativo';
  public readonly activeFemaleLabel: string = 'Ativa';
  public readonly inactiveMaleLabel: string = 'Inativo';
  public readonly inactiveFemaleLabel: string = 'Inativa';
}

export function GD_ACTIVE_INACTIVE_INTL_PROVIDER_FACTORY(parentIntl: GdActiveInactiveIntl): GdActiveInactiveIntl {
  return parentIntl || new GdActiveInactiveIntl();
}

export const GD_ACTIVE_INACTIVE_INTL_PROVIDER = {
  provide: GdActiveInactiveIntl,
  deps: [[new Optional(), new SkipSelf(), GdActiveInactiveIntl]],
  useFactory: GD_ACTIVE_INACTIVE_INTL_PROVIDER_FACTORY,
};

