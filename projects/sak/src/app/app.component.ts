import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'sak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'sak';
  public datetime = new Date();
  public readonly version: string = 'v' + environment.version;

  public ngOnInit(): void {
    //
  }
}
