import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Proyecto2doParcialPageRoutingModule } from './proyecto2do-parcial-routing.module';

import { Proyecto2doParcialPage } from './proyecto2do-parcial.page';
import { QrjsonComponent } from '../qrjson/qrjson.component';
import { TablesComponent } from '../tables/tables.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Proyecto2doParcialPageRoutingModule,
    
  ],
  declarations: [Proyecto2doParcialPage,
    QrjsonComponent,
    TablesComponent
  ]
})
export class Proyecto2doParcialPageModule {}
