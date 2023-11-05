import { Component } from '@angular/core';
import { myAnimation1 } from './animations/1';
import { ChildrenOutletContexts } from '@angular/router';
import { myAnimation2 } from './animations/2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimation2],
})
export class AppComponent {
  title = 'router-animations';

  constructor(private readonly childrenOutletContexts: ChildrenOutletContexts) {}

  getRouterOutletState(): any {
    return this.childrenOutletContexts.getContext('primary')?.route?.snapshot?.component;
  }
}
