  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
  import {NgTrcLibModule, TrcLibConfig} from 'ng-trc-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTrcLibModule.forRoot(new TrcLibConfig('This is the key'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
