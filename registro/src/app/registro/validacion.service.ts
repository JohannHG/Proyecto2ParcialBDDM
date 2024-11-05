
import { Injectable } from '@angular/core';

interface Usuario {
  idUsuario: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  correo: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root',
})
export class ValidacionService {
  private usuariosRegistrados: Usuario[] = [];
  private nextId = 1; 

  constructor() {}

  registrarUsuario(usuario: Omit<Usuario, 'idUsuario'>): string {
    const existe = this.usuariosRegistrados.some(u => u.correo === usuario.correo);

    if (existe) {
      return 'El usuario ya está registrado';
    } else {
      const newUser: Usuario = { ...usuario, idUsuario: this.nextId++ }; 
      this.usuariosRegistrados.push(newUser);
      return 'Usuario registrado exitosamente';
    }
  }
}

