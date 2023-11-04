import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-card',
  templateUrl: './first-card.component.html',
  styleUrls: ['./first-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FirstCardComponent {

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

}
