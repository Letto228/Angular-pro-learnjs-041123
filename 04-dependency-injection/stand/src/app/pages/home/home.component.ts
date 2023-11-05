import { Component, Inject, Injector, Optional, inject } from '@angular/core';
import { token } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {
    // console.log('HomeComponent', inject(token))
    console.log('HomeComponent', inject(Injector))
  }
}
