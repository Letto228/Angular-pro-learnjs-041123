import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FirstPageComponent {

  counter = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  detach() {
    this.changeDetectorRef.detach()
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  reattach() {
    this.changeDetectorRef.reattach();
  }

}
