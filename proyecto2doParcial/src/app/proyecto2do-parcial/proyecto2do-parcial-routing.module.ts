import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Proyecto2doParcialPage } from './proyecto2do-parcial.page';

const routes: Routes = [
  {
    path: '',
    component: Proyecto2doParcialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Proyecto2doParcialPageRoutingModule {}
