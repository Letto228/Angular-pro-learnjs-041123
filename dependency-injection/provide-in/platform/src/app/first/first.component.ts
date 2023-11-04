import { Component, ApplicationRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  number = 0;

  constructor(private dataService: DataService, app: ApplicationRef) { 
    this.dataService.data$().subscribe(data => {
      this.number = data;
      app.tick(); // sync CD by platform service
    });
  }

  up() {
    this.dataService.setData(this.number+1);
  }
}