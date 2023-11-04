import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-card',
  templateUrl: './first-card.component.html',
  styleUrls: ['./first-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstCardComponent {

  @Input() counter = 0;

}
