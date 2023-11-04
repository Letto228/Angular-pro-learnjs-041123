import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SecondPageComponent {

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

}
