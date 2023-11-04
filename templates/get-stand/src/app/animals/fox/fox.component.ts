import { Component } from '@angular/core';
@Component({
  selector: 'fox',
  template: `
    <p>
      fox: <strong>{{phrase}}</strong>
    </p>
  `,
})
export class FoxComponent {
  phrase = 'wow'
}
