import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';
import { easyEffect, easySignal } from './easy-signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  get title(): string {
    console.log('Calculate');

    return 'signals'
  };

  count = signal(0);

  constructor() {
    // console.log(this.count());

    // this.count.set(2);

    // setTimeout(() => {
    //   this.count.update(value => {
    //     return value + 1;
    //   });
    //   console.log(this.count());
    // }, 1000);

    // const doubleSignal = computed(() => {
    //   return this.count() * 2;
    // });

    // doubleSignal();
    // doubleSignal();
    // doubleSignal();

    // this.count.set(30);

    // doubleSignal();

    // console.log(this.count());

    // this.count.update(value => {
    //   return value + 1;
    // });

    // console.log(this.count());
    
    // count.mutate(value => {
    //   value.name = '123';
    // });

    // const sohowCount = signal(false);
    // const count = signal(0);
    // const conditionalCount = computed(() => {
    //   if (sohowCount()) {
    //     return `Timer ${count()}`;
    //   }

    //   return ``;
    // });

    // conditionalCount();

    // sohowCount.set(true);

    // conditionalCount();
    // conditionalCount();
    // conditionalCount();
    // conditionalCount();
    // conditionalCount();

    // sohowCount.set(false);

    // conditionalCount();

    // effect(onCleanup => {
    //   console.log(this.count(), 'Count');

    //   onCleanup(() => {
    //     // clearInterval();
    //   })
    // });

    // setTimeout(() => {
    //   this.count.set(123);
    // }, 2000);

    // setTimeout(() => {
    //   this.count.set(312);
    // }, 4000);

    const sigal = easySignal(0);

    easyEffect(() => {
      console.log(sigal(), 'Count');
    });

    sigal.set(22);

    setTimeout(() => {
      sigal.set(33);
    }, 4000);
  }
}
