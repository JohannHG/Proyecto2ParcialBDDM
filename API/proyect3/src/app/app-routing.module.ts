import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buscar-componente',
    loadChildren: () => import('./buscar-componente/buscar-componente.module').then( m => m.BuscarComponentePageModule)
  },
  {
    path: 'subir-pdf',
    loadChildren: () => import('./subir-pdf/subir-pdf.module').then( m => m.SubirPdfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
