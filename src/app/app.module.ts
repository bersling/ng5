import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerModule } from 'spinner-angular';
import {BlaComponent} from 'a-pure-typescript-test';

@NgModule({
  declarations: [
    AppComponent,
    BlaComponent
  ],
  imports: [
    BrowserModule,
    SpinnerModule.forRoot({
      primaryColor: '#FCBE41',
      secondaryColor: '#309488'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
