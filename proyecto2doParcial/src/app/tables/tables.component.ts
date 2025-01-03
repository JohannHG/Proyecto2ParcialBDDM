import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  data: any[] = [];
  headers:  any[] = [];
  options: any[] = [
    {label: 'actividad'},
    {label: 'Actividad Detalle'},
    {label: 'evento'},
    {label: 'Actividad evento'},
    {label: 'Fecha de evento'},
    {label: 'Evento por usuario'},
    {label: 'Fechas'},
    {label: 'Fecha Hora'},
    {label: 'Hora'},
    {label: 'Imagenes'},
    {label: 'Instituciones'},
    {label: 'Perfil'},
    {label: 'Registro de asistencias'},
    {label: 'Usuarios'},
    
  
    
   
  ]

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchData(index: number) {
    const url = 'http://localhost:3000/querys';
    const selected = this.options[index];
   
    console.log('Opción seleccionada:', selected);
    let selectIndex = index + 1;

    const body = { tablas: selectIndex};
    
    this.http.post(url, body).subscribe(
      (response: any) => {
        this.data = response.data;
        this.headers = response.headers;
        console.log('Datos recibidos:', this.data); 
        console.log('hEderss', this.headers)
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }

  generatePDF() {
    const doc = new jsPDF();
    const tableData = [];

    // Añadir el título
    doc.setFontSize(18);
    doc.text('Reporte de Datos', 14, 22);

    // Encabezado de la tabla
    const header = this.headers;
    tableData.push(header);

    // Añadir los datos
    this.data.forEach((item: any) => {
      const row = this.headers.map(header => item[header]);
      tableData.push(row);
    });

    
    autoTable(doc,{
      startY: 30,
      head: [header],
      body: tableData, 
      margin: { top: 30 },
  })
  
    // Guardar el archivo PDF
    doc.save('reporte-datos.pdf');
}
  
}
