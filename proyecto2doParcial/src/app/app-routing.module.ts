import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./proyecto2do-parcial/proyecto2do-parcial.module').then( m => m.Proyecto2doParcialPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'proyecto2do-parcial',
    loadChildren: () => import('./proyecto2do-parcial/proyecto2do-parcial.module').then( m => m.Proyecto2doParcialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
