import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent {
  @Input() counter = 0;
}
