import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SecondCardComponent {

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

}
