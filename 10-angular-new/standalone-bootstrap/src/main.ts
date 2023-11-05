import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
        {
            provide: 'name',
            useValue: 'Egor',
        },
        // importProvidersFrom(RouterModule.forRoot()),
        // provideRouter(),
    ]
});