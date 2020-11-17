import { InjectionToken } from '@angular/core';

import { ConfirmDialogConfig } from './confirm-dialog-config.interface';

export const CONFIRM_DIALOG_DEFAULT_CONFIG = new InjectionToken<Partial<ConfirmDialogConfig>>('CONFIRM_DIALOG_DEFAULT_CONFIG');
