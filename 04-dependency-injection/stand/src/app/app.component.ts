import { Component, Inject, InjectionToken, Injector, inject } from '@angular/core';

export const token = new InjectionToken('Token', {
  providedIn: 'any',
  factory: () => Math.random(),
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [],
})
export class AppComponent {
  title = 'stand';

  constructor() {
    // console.log('AppComponent', inject(Service));
    // console.log('AppComponent', inject(token));
    // const parentInjector = Injector.create({
    //   providers: [
    //     {
    //       provide: 'name',
    //       useValue: 'AppComponent',
    //     },
    //     {
    //       provide: token,
    //       // useValue: 'Its tokent value',
    //       // useExisting: 'name',
    //       useClass: Service,
    //     }
    //   ],
    // });
    // const injector = Injector.create({
    //   providers: [
    //     {
    //       provide: new InjectionToken('Token'),
    //       useValue: 100,
    //     }
    //   ],
    //   parent: parentInjector,
    // });

    // console.log(injector.get('token', 'not found', {optional: true, self: true}));
    // console.log(injector.get(token));
  }
}
