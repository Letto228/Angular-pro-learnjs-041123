import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from './carousel/carousel.module';
import { TopBarModule } from './top-bar/top-bar.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    TopBarModule,
  ],
})
export class HomeModule { }
