import { Component } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'cat',
  template: `
    <p>
      cat: <strong>{{phrase}}</strong>
    </p>
  `,
})
export class CatComponent extends Animal {
  phrase = ''

  say() {
    this.phrase = 'meow';
  }
}
