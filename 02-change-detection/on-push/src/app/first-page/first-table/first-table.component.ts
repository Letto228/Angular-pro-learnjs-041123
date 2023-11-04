import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTableComponent {

  counter = 0;

  constructor(private readonly cd: ChangeDetectorRef) {
    setInterval(() => {
      this.counter += 1;
      // this.cd.markForCheck();
    }, 1000);
  }
}
