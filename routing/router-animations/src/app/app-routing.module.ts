import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KakapoComponent } from './pages/kakapo/kakapo.component';
import { TakaheComponent } from './pages/takahe/takahe.component';
import { FairyTernComponent } from './pages/fairy-tern/fairy-tern.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'kakapo',
  },
  {
    path: 'kakapo',
    component: KakapoComponent,
  },
  {
    path: 'takahe',
    component: TakaheComponent,
  },
  {
    path: 'fairy-tern',
    component: FairyTernComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
