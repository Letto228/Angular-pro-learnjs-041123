import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  ngAfterViewChecked(): void {
    // setTimeout(() => {
      this.counter += 1;

      console.log('Increment', this.counter);
    // });
  }

  onLogTitle() {
    console.log(this.counter);
  }
}
