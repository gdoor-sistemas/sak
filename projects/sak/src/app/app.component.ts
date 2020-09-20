import { Component, OnInit } from '@angular/core';
import { Url, Util } from '@gdoor/helpers';

@Component({
  selector: 'sak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sak';

  public ngOnInit(): void {
    console.log(Util.asArray('asd'));

    Url.setApiUrl('http://localhost');
    console.log(Url.getResourceUrl('details', {search: this.title}));
  }
}
