import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';


@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }
