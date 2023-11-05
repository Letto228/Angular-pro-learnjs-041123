import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]',
  exportAs: 'color',
})
export class ColorDirective {

  constructor() { }

}
