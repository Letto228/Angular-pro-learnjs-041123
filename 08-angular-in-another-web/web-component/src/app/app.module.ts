import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [BrowserModule],
})
export class AppModule {
  ngDoBootstrap() {}

  constructor(injector: Injector) {
    const helloComponentElement = createCustomElement(HelloComponent, {injector});

    customElements.define('hello-component', helloComponentElement);
  }
}
