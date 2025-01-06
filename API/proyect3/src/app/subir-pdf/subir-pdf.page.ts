import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subir-pdf',
  templateUrl: './subir-pdf.page.html',
  styleUrls: ['./subir-pdf.page.scss'],
  standalone: false,
})
export class SubirPdfPage {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Capturar archivo seleccionado
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Acción para subir archivo
  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdf', this.selectedFile, this.selectedFile.name);
      formData.append('usuario_id', '123'); // Puedes personalizar este campo según tus necesidades

      // Enviar el archivo al backend
      this.http.post('http://localhost:3000/api/subir-pdf', formData).subscribe(
        (response) => {
          console.log('Archivo subido exitosamente', response);
          alert('Archivo subido exitosamente.');
        },
        (error) => {
          console.error('Error al subir el archivo', error);
          alert('Error al subir el archivo.');
        }
      );
    } else {
      alert('Por favor selecciona un archivo PDF.');
    }
  }

  // Acción para descargar archivo
  onDownload() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/ejemplo.pdf'; // Ruta del archivo estático para la descarga
    link.download = 'archivo-ejemplo.pdf';
    link.click();
  }
}
