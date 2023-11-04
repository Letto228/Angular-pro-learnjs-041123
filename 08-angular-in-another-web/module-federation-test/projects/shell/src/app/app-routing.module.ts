import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellPageComponent } from './shell-page/shell-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShellPageComponent,
  },
  {
    path: 'mf',
    loadChildren: () => import('micro-front/HelloModule').then(m => m.HelloModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
