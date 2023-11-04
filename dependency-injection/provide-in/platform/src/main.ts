import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FirstModule } from './app/first/first.module';
import { SecondModule } from './app/second/second.module';

platformBrowserDynamic().bootstrapModule(FirstModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(SecondModule)
  .catch(err => console.error(err));
