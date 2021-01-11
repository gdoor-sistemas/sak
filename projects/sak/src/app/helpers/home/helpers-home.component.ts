import { Component, OnInit } from '@angular/core';
import { DestroyerService } from '@gdoor/helpers/services';

@Component({
  selector: 'sak-helpers-home',
  templateUrl: './helpers-home.component.html',
  styleUrls: ['./helpers-home.component.scss'],
  providers: [DestroyerService],
})
export class HelpersHomeComponent implements OnInit {

  constructor(private _destroyed$: DestroyerService) { }

  public ngOnInit(): void {
  }

}
