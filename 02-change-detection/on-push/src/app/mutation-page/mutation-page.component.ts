import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-mutation-page',
  templateUrl: './mutation-page.component.html',
  styleUrls: ['./mutation-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MutationPageComponent {
  @Input() counterObject = {counter: 0};
}
