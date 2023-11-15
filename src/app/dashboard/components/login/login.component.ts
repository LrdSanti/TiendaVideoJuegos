// login.component.ts

import { Component } from '@angular/core';


import { Usuario } from '../../model/usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  usuario: Usuario = {

    idUsuario: null,
    correo: '',
    pass: '',
    rol: ''
  } 


  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    // Lógica para el inicio de sesión
    const exitoso = this.authService.login(this.usuario.correo, this.usuario.pass);

    if (exitoso) {
      console.log('Inicio de sesión exitoso');

      // Obtener el rol del usuario desde el servicio de autenticación
      const rolUsuario = this.authService.getRolUsuario();

      // Redirigir según el rol
      if (rolUsuario === 'admin') {
        this.router.navigate(['/dashboard/inicio/admin']);
      } else if (rolUsuario === 'gamer') {
        this.router.navigate(['/dashboard/inicio/gamer']);
      } else if (rolUsuario === 'invitado') {
        this.router.navigate(['/dashboard/inicio/invitado']);
      } else {
        console.error('Rol de usuario no reconocido');
      }
    } else {
      console.error('Inicio de sesión fallido');
    }
  }

 
}
