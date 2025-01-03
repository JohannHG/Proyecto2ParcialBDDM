import { Component } from '@angular/core';
import QRCode from 'qrcode'; //importar el mondulo npm

@Component({
  selector: 'app-qrjson',
  templateUrl: './qrjson.component.html',
  styleUrls: ['./qrjson.component.scss'],
})
export class QrjsonComponent {
  qrCodeUrl: string | undefined; // Propiedad para almacenar la URL del código QR

  constructor() {
    this.generateQR(); // Genera el QR al iniciar el componente
  }

  async generateQR() {

    const data = { //extraer de la base de datos
      name: 'Karla Solis',
      age: 100,
      occupation: 'Developer',
    };

    try {
      this.qrCodeUrl = await QRCode.toDataURL(JSON.stringify(data)); // Almacena el QR generado con un JSON
    } catch (error) {
      console.error('Error generando el código QR:', error);
    }
  }
}
