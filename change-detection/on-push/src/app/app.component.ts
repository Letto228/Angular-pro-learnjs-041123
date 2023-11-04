import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'change-detector';

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  // or

  // mutationCounter = {counter: 0};

  // constructor() {
  //   setInterval(() => {
  //     this.mutationCounter.counter += 1;
  //   }, 1000);
  // }
}
