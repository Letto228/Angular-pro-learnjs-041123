import { Component, Optional } from '@angular/core';
import { InnerLogicService } from '../carousel/inner-logic.service';

@Component({
  selector: 'hacker',
  templateUrl: './hacker.component.html',
})
export class HackerComponent {

  constructor(@Optional() innerLogicService: InnerLogicService) {
    if(innerLogicService) {
      innerLogicService.timer = 100;
    }
  }

}
