import { Component } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'dog',
  template: `
    <p>
      dog: <strong>{{phrase}}</strong>
    </p>
  `,
})
export class DogComponent extends Animal {
  phrase = ''

  say() {
    this.phrase = 'woof';
  }
}
