import { Component } from '@angular/core';

@Component({
  selector: 'cat',
  template: `
    <p>
      cat: <strong>{{phrase}}</strong>
    </p>
  `,
})
export class CatComponent {
  phrase = 'meow'
}
