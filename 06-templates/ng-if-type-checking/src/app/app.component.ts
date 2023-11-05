import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-if-type-checking';

  data: object | undefined = {
    name: 'Egor',
    working: true,
  }
}
