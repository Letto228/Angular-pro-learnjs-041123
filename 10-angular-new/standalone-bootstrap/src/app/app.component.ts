import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  title = 'stadealone-bootstrap';

  constructor(
    @Inject('name') name: string,
  ) {
    console.log(name);
  }
}
