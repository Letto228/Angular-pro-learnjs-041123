import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, token } from './app.component';
import { HostComponent } from './host/host.component';
import { Service } from './service';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide: Service,
    //   // useClass: Service,
    //   useFactory: () => new Service(inject(token))
    // }
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
