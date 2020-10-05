import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'models',
    loadChildren: () => import('./models/models.module').then(m => m.ModelsModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
      useHash: true,
      anchorScrolling: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
