import { Component, inject } from '@angular/core';
import { token } from '../../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor() {
    console.log('AdminComponent', inject(token))
  }
}
