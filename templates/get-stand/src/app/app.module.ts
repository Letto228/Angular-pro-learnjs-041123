import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';
import { RockComponent } from './animals/rock/rock.component';
import { CatComponent } from './animals/cat/cat.component';
import { DogComponent } from './animals/dog/dog.component';
import { FoxComponent } from './animals/fox/fox.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
    CatComponent,
    DogComponent,
    FoxComponent,
    RockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
