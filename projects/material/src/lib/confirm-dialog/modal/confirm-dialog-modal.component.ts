import { AfterViewInit, Component, HostListener, Inject, QueryList, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { ConfirmDialogConfig } from '../confirm-dialog-config.interface';

@Component({
  selector: 'gd-confirm-dialog-modal',
  templateUrl: './confirm-dialog-modal.component.html',
  styleUrls: ['./confirm-dialog-modal.component.scss'],
})
export class ConfirmDialogModalComponent implements AfterViewInit {
  @ViewChildren(MatButton) public buttons: QueryList<MatButton>;

  constructor(@Inject(MAT_DIALOG_DATA) public readonly config: ConfirmDialogConfig) {}

  /**
   *
   */
  public ngAfterViewInit(): void {
    if (!isNaN(this.config.focusIndex)) {
      this._focus(this.config.focusIndex);
    }
  }

  /**
   *
   */
  private _focus(index: 0 | 1): void {
    this.buttons.find((_, i) => i === index)._getHostElement().focus();
  }

  @HostListener('keydown.arrowright')
  public rightArrowDown(): void {
    this._focus(1);
  }

  @HostListener('keydown.arrowleft')
  public leftArrowDown(): void {
    this._focus(0);
  }
}
