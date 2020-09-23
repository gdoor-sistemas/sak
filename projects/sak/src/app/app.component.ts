import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'sak';
  public datetime = new Date();

  public ngOnInit(): void {
    //
  }
}
