import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoPage } from './proyecto.page';


const routes: Routes = [
  {
    path: '',
    component: ProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoPageRoutingModule {}
