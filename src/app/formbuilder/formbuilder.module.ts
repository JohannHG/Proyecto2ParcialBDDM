import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormbuilderPageRoutingModule } from './formbuilder-routing.module';

import { FormbuilderPage } from './formbuilder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormbuilderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormbuilderPage]
})
export class FormbuilderPageModule {}
