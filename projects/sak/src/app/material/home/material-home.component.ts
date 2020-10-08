import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sak-material-home',
  templateUrl: './material-home.component.html',
  styleUrls: ['./material-home.component.scss'],
})
export class MaterialHomeComponent implements OnInit {
  public datetime = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public log($event: any): void {
    console.log($event);
  }
}
