import { Component, ApplicationRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  number = 0;

  constructor(private dataService: DataService, app: ApplicationRef) { 
    this.dataService.data$().subscribe(data => {
      this.number = data;
      app.tick(); // sync CD by platform service
    });
  }

  down() {
    this.dataService.setData(this.number-1);
  }

}