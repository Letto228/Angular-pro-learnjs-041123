import { Route } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

export const pagesRoutes: Route[] = [
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
]