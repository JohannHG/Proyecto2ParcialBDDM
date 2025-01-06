import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarComponentePage } from './buscar-componente.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarComponentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarComponentePageRoutingModule {}
