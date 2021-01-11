import { Component, OnInit } from '@angular/core';
import { ReleaseOnDestroy } from '@gdoor/helpers/services';

@Component({
  selector: 'sak-helpers-home',
  templateUrl: './helpers-home.component.html',
  styleUrls: ['./helpers-home.component.scss'],
  providers: [ReleaseOnDestroy],
})
export class HelpersHomeComponent implements OnInit {

  constructor(private _destroyed$: ReleaseOnDestroy) { }

  public ngOnInit(): void {
  }

}
