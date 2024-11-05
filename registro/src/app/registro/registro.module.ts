import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { UsuarioComponent } from './usuario/usuario.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { ActividadComponent } from './actividad/actividad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage, UsuarioComponent, InstitucionComponent, ActividadComponent]
})
export class RegistroPageModule {}
