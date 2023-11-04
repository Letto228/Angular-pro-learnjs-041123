import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopBarModule { }
