import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
  @Output() formStatus = new EventEmitter<{ valid: boolean; value: any }>();
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.usuarioForm = this.fb.group({
      idNombre: ['', Validators.required], // Nuevo campo para ID de Nombre
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellidoMaterno: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$.!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/)
        ]
      ]
    });

    this.usuarioForm.valueChanges.subscribe(() => {
      this.formStatus.emit({ valid: this.usuarioForm.valid, value: this.usuarioForm.value });
    });
  }

  async registrarUsuario() {
    if (this.usuarioForm.valid) {
      const mensaje = 'Usuario registrado correctamente: ' + JSON.stringify(this.usuarioForm.value);
      await this.mostrarAlerta('Información', mensaje);
      console.log('Usuario registrado:', this.usuarioForm.value);
      this.resetFormulario();
    } else {
      await this.mostrarAlerta('Error', 'Formulario inválido. Por favor revise los campos.');
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

  resetFormulario() {
    this.usuarioForm.reset();
  }
}


