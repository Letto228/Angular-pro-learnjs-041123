import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondTableComponent {

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  @HostListener('click') empty() {}
}
