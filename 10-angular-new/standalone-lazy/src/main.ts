import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadChildren: () => import('./app/pages/routes').then(m => m.pagesRoutes),
      },
      {
        path: 'login',
        loadComponent: () => import('./app/login/login.component').then(m => m.LoginComponent),
      }
    ]),
  ],
});
