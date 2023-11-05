import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  bigPrime = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 100);
  }

  setBigPrime() {
    // this.bigPrime = findBigPrime();
    const worker = new Worker(new URL('./find-big-prime.worker', import.meta.url));

    worker.postMessage('hello');

    worker.addEventListener('message', ({data}) => {
      this.bigPrime = data;
      
      worker.terminate();
    });

    // if (typeof Worker !== 'undefined') {
    //   // Create a new
    //   const worker = new Worker(new URL('./find-big-prime.worker', import.meta.url));
    //   worker.onmessage = ({ data }) => {
    //     console.log(`page got message: ${data}`);
    //   };
    //   worker.postMessage('hello');
    // } else {
    //   // Web Workers are not supported in this environment.
    //   // You should add a fallback so that your program still executes correctly.
    // }
  }
}
