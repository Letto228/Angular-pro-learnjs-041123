import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  @Input() name = '';
  @Output() clicked = new EventEmitter<string>();
}
