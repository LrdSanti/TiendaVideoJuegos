// auth.service.ts

import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Usuario actualmente autenticado
  private usuarioAutenticado: Usuario | null = null;

  private usuarios: Usuario[] = [
    { idUsuario: 1, correo: 'usuario1@example.com', pass: 'password1', rol: 'invitado' },
    { idUsuario: 2, correo: 'usuario2@example.com', pass: 'password2', rol: 'admin' },
    { idUsuario: 2, correo: 'usuario3@example.com', pass: 'password3', rol: 'gamer' },
    
  ];


  login(correo: string, pass: string): boolean {
    // Lógica para validar el inicio de sesión
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.correo === correo && usuario.pass === pass
    );

    if (usuarioEncontrado) {
      this.usuarioAutenticado = usuarioEncontrado;
      return true;
    }

    return false;
  }

  getRolUsuario(): string | null {
    return this.usuarioAutenticado ? this.usuarioAutenticado.rol : null;
  }

}
