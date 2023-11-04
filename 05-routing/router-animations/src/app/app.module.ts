import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakaheComponent } from './pages/takahe/takahe.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KakapoComponent } from './pages/kakapo/kakapo.component';
import { FairyTernComponent } from './pages/fairy-tern/fairy-tern.component';

@NgModule({
  declarations: [
    AppComponent,
    TakaheComponent,
    NavBarComponent,
    KakapoComponent,
    FairyTernComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
