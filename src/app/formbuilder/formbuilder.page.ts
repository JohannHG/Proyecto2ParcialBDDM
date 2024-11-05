import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatosusuarioService } from './datosusuario.service';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.page.html',
  styleUrls: ['./formbuilder.page.scss'],
})


export class FormbuilderPage implements OnInit {

  Datos = this.formBuilder.group({
    Nombre:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Apellido:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Correo: ['', [
        Validators.required,
        Validators.pattern('^[\\w.%+-]*@[\\w.-]*\\.[a-zA-Z]{2,}$')
      ]],
    password: ['', [Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[-_!#$%^&*])[\\w-_!#$%^&*]+$'),
        Validators.minLength(8),
        Validators.maxLength(16)
      ]],});

  constructor(private formBuilder: FormBuilder,private servicedatos:DatosusuarioService) { }
  Valida(correo: string | null | undefined) {
    if (correo) {
      console.log(correo);
      const c = this.servicedatos.buscarCorreo(correo);
      if (c) {
        console.log('Acceso permitido');
        const message = 'Este es tu QR generado'; // Mensaje personalizado
        const image = 'https://drive.google.com/uc?export=view&id=1c2Ai4ZwpCi76fb6L5ogAZyUJxbBA8BTP';
 // Coloca aquí la URL de tu imagen
        this.servicedatos.sendConfirmationEmail(correo, message, image);
      } else {
        console.log('Acceso denegado');
      }
    } else {
      console.log('El correo proporcionado es inválido.');
    }
  }
  
  onSubmit() {
    if (this.Datos.valid) {
      const { Correo, password } = this.Datos.value; // Extrae email y password del formulario
      this.Valida(Correo); // Verifica el correo
    }
  }
    
  ngOnInit() {
  }
  /*Valida(correo:any){
    console.log(correo);
    const c = this.servicedatos.buscarCorreo(correo);
    if(c==true){
      console.log('Acceso permitido');
      }else{
        console.log('Acceso denegado');
      }
      }
*/
  enviar(){
    console.warn(this.Datos.value);
  }

  getAdvertencias(){
    if(this.Datos.controls.Nombre.hasError('required')){
      return 'Este campo es obligatorio';
    }
    if(this.Datos.controls.Nombre.hasError('pattern')){
      return 'Solo se permite letras y espacios';
    }
    return'';
  }
  getAdvertenciasCorreo(){
    if(this.Datos.controls.Correo.hasError('required')){
      return 'Este campo es obligatorio';
    }
    if(this.Datos.controls.Correo.hasError('pattern')){
      return 'Debe haber un arroba y un punto antes del dominio';
    }
    return'';
  }
  getAdvertenciaspassword(){
    if (this.Datos.controls.password.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if(this.Datos.controls.password.hasError('pattern')){
      return 'Debe contener al menos una Mayuscula,un Numero y un caracter especial';
    }
    if(this.Datos.controls.password.hasError('minlength')){
      return 'Debe tener minimo 8 caracteres';
    }
    if(this.Datos.controls.password.hasError('maxlength')){
      return 'Debe tener maximo 16 caracteres';
    }
    return'';
  }
}
