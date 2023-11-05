import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    
  ]
})
export class CarouselModule { }
