import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mutation-page',
  templateUrl: './mutation-page.component.html',
  styleUrls: ['./mutation-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MutationPageComponent implements OnChanges {
  @Input() counterObject = {counter: 0};

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
