import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  constructor(
    @Inject('name') name: string,
  ) {
    console.log(name);
  }
}
