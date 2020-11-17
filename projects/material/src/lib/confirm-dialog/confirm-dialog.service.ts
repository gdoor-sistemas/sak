import { Inject, Injectable, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ConfirmDialogConfig } from './confirm-dialog-config.interface';
import { ConfirmDialogModalComponent } from './modal/confirm-dialog-modal.component';
import { CONFIRM_DIALOG_DEFAULT_CONFIG } from './confirm-dialog-default-config.constant';

export const defaultConfig: Partial<ConfirmDialogConfig> = {
  confirmText: 'Sim',
  cancelText: 'Não',
  focusIndex: 1,
};

@Injectable()
export class ConfirmDialogService {
  constructor(public dialog: MatDialog,
              @Optional() @Inject(CONFIRM_DIALOG_DEFAULT_CONFIG) private _defaults: ConfirmDialogConfig) {}

  public ask(question: string, config?: ConfirmDialogConfig): Observable<boolean>;
  public ask(question: string, description: string, config?: ConfirmDialogConfig): Observable<boolean>;
  public ask(question: string, description: string, confirmText: string, config?: ConfirmDialogConfig): Observable<boolean>;

  /**
   * Presents a dialog with 2 closing options
   */
  public ask(...args): Observable<boolean> {
    const data: ConfirmDialogConfig = this._normalizeAskConfig(args);
    return this.dialog.open(ConfirmDialogModalComponent, {
      data,
      autoFocus: false,
      width: '680px',
      disableClose: true,
      role: 'dialog',
    }).afterClosed();
  }

  /**
   * Apply the configuration according to the passed arguments
   */
  private _normalizeAskConfig(args: any[]): ConfirmDialogConfig {
    const data: ConfirmDialogConfig = {question: ''};

    switch (args.length) {
      case 1:
        if (isString(args[0])) {
          data.question = args[0];
        } else {
          Object.assign(data, args[0]);
        }

        break;

      case 2:
        if (isString(args[1])) {
          data.description = args[1];
        } else {
          Object.assign(data, args[1]);
        }

        data.question = args[0];
        break;

      case 3:
        if (isString(args[2])) {
          data.confirmText = args[2];
        } else {
          Object.assign(data, args[2]);
        }

        data.question = args[0];
        data.description = args[1];
        break;

      case 4:
        Object.assign(data, args[3]);
        data.question = args[0];
        data.description = args[1];
        data.confirmText = args[2];
        break;
    }

    return Object.assign({}, defaultConfig, this._defaults, data);
  }
}

function isString(value): boolean {
  return typeof value === 'string';
}
