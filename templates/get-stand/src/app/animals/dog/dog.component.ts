import { Component } from '@angular/core';

@Component({
  selector: 'dog',
  template: `
    <p>
      dog: <strong>{{phrase}}</strong>
    </p>
  `,
})
export class DogComponent {
  phrase = 'woof'
}
