import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ValidacionService } from './validacion.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { ActividadComponent } from './actividad/actividad.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  @ViewChild(UsuarioComponent) usuarioComponent!: UsuarioComponent;
  @ViewChild(InstitucionComponent) institucionComponent!: InstitucionComponent;
  @ViewChild(ActividadComponent) actividadComponent!: ActividadComponent;

  usuarioFormValid: boolean = false;
  institucionFormValid: boolean = false;
  usuarioFormValue: any; 
  institucionFormValue: any;

  constructor(private validacionService: ValidacionService, private alertController: AlertController) {}

  ngOnInit() {}

  onUsuarioFormStatusChange(event: { valid: boolean; value: any }) {
    this.usuarioFormValid = event.valid;
    this.usuarioFormValue = event.value;
  }

  onInstitucionFormStatusChange(event: { valid: boolean; value: any }) {
    this.institucionFormValid = event.valid;
    this.institucionFormValue = event.value;
  }

  async registrarUsuario() {
    if (this.usuarioFormValid && this.institucionFormValid) {
      const mensaje = this.validacionService.registrarUsuario(this.usuarioFormValue);
      await this.mostrarAlerta('Registro', mensaje);
      if (mensaje === 'Usuario registrado exitosamente') {
        console.log('Usuario registrado:', this.usuarioFormValue); // Mensaje en consola
        this.resetFormulario();
      }
    } else {
      await this.mostrarAlerta('Error', 'Por favor complete todos los campos correctamente.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  private resetFormulario() {
    this.usuarioComponent.resetFormulario();
    this.institucionComponent.resetFormulario();
    this.actividadComponent.resetFormulario();
  }
}
