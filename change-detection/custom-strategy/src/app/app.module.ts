import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstTableComponent } from './first-page/first-table/first-table.component';
import { SecondTableComponent } from './first-page/second-table/second-table.component';
import { FirstCardComponent } from './second-page/first-card/first-card.component';
import { SecondCardComponent } from './second-page/second-card/second-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    FirstTableComponent,
    SecondTableComponent,
    FirstCardComponent,
    SecondCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
