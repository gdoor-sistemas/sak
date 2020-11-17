import { Component } from '@angular/core';
import { ConfirmDialogService } from '@gdoor/material';

@Component({
  selector: 'sak-material-home',
  templateUrl: './material-home.component.html',
  styleUrls: ['./material-home.component.scss'],
})
export class MaterialHomeComponent {
  public confirmResult: boolean;

  constructor(private cfgDlg: ConfirmDialogService) { }

  public confirm(): void {
    this.cfgDlg.ask('Do?', 'Really do? This cannot be undone.').subscribe(res => this.confirmResult = res);
  }
}
