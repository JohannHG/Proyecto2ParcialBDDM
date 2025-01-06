import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarComponentePageRoutingModule } from './buscar-componente-routing.module';

import { BuscarComponentePage } from './buscar-componente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarComponentePageRoutingModule
  ],
  declarations: [BuscarComponentePage]
})
export class BuscarComponentePageModule {}
