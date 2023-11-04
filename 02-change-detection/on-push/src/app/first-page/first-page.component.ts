import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent {

  counter = 0;

  constructor(changeDetector: ChangeDetectorRef) {
    setInterval(() => {
      this.counter += 1;
      // changeDetector.markForCheck();
    }, 1000);
  }

}
