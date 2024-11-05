import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbuilderPage } from './formbuilder.page';

const routes: Routes = [
  {
    path: '',
    component: FormbuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormbuilderPageRoutingModule {}
