import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view engine';
  textContent = 'text content';
  divClasses = 'line';

  check() {
    console.log('checked');
  }
}
