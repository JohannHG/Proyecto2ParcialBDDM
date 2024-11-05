import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class DatosusuarioService {
datos:any[] =[{
  correo:'jovalbor@outlook.es',//correo que debera ser ingresado para ser validado
  password:'1A34567_A'
},
  {
  correo:'rojasjimenezalejandro10@gmail.com',
  password:'789&hlNb'
},
  {
  correo:'juan@hotmail.com',
  password:'45_Bax90'
}];
  constructor() {emailjs.init('ar6QR4whZS2jmyEbS'); }
  sendConfirmationEmail(email: string, message: string, image: string) {
    const templateParams = {
      to_email: email,
      message: message,
      image: image
    };

    return emailjs.send('service_asvfl3p', 'template_ufos91n', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  getDatos(){
    return this.datos;
  }
  buscarCorreo(correo:string){
if(this.datos.find(x=>x.correo==correo)){
  return true;
}else{
  return false;
 }
  }
  }

