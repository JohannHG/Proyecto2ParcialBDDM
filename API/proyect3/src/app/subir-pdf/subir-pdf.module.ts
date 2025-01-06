import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirPdfPageRoutingModule } from './subir-pdf-routing.module';

import { SubirPdfPage } from './subir-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirPdfPageRoutingModule
  ],
  declarations: [SubirPdfPage]
})
export class SubirPdfPageModule {}
