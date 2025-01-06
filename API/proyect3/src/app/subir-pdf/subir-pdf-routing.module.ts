import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirPdfPage } from './subir-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: SubirPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirPdfPageRoutingModule {}
