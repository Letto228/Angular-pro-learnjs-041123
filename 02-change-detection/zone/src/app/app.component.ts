import { ApplicationRef, ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  constructor(ngZone: NgZone, private readonly app: ApplicationRef) {
    ngZone.onMicrotaskEmpty.subscribe(console.log);
    
    // ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     this.counter += 1;
    //     console.log('Increment');
    //   }, 100);
    // });
    // fromEvent(document, 'click').subscribe(() => {
    //   this.counter += 1;
    // })

    // setInterval(() => {
    //   this.app.tick();
    // }, 100);
  }

  onClick() {
    this.counter += 1;

    console.log('Increment');
  }
}
