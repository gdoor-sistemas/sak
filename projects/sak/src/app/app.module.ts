import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipesModule } from '@gdoor/helpers';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimeControlModule } from '@gdoor/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PipesModule,
    MatFormFieldModule,
    DateTimeControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
