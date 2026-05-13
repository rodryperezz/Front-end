import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../../services-ticket/ticket-service';

interface Usuario {
  Id: number;
  Usuario: string;
  NombreCompleto: string;
  Email: string;
  Contrasena: string;
  Rol: string;
}

<<<<<<< HEAD
interface PasswordRequirement {
  key: string;
  label: string;
  valid: boolean;
}

=======
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  usuario: Usuario = this.resetFormulario();
  notificacion: { tipo: string; mensaje: string } | null = null;
  cargando: boolean = false;
<<<<<<< HEAD
  passwordTouched: boolean = false;
  private timeoutId: any = null;

  passwordReqs: PasswordRequirement[] = [
    { key: 'length', label: 'Al menos 6 caracteres', valid: false },
    { key: 'upper', label: 'Al menos una mayúscula (A-Z)', valid: false },
    { key: 'lower', label: 'Al menos una minúscula (a-z)', valid: false },
    { key: 'digit', label: 'Al menos un número (0-9)', valid: false },
  ];

=======
  private timeoutId: any = null;

>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
  constructor(private service: TicketService, private router: Router) {}

  private mostrarNotificacion(tipo: string, mensaje: string): void {
    this.notificacion = { tipo, mensaje };
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.notificacion = null, 5000);
  }

  resetFormulario(): Usuario {
<<<<<<< HEAD
    this.passwordTouched = false;
=======
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
    return {
      Id: 0,
      Usuario: '',
      NombreCompleto: '',
      Email: '',
      Contrasena: '',
      Rol: 'user'
    };
  }

<<<<<<< HEAD
  onPasswordChange(): void {
    const pwd = this.usuario.Contrasena;
    this.passwordReqs[0].valid = pwd.length >= 6;
    this.passwordReqs[1].valid = /[A-Z]/.test(pwd);
    this.passwordReqs[2].valid = /[a-z]/.test(pwd);
    this.passwordReqs[3].valid = /\d/.test(pwd);
  }

  get passwordValida(): boolean {
    return this.passwordReqs.every(r => r.valid);
  }

  RegistrarUsuario(): void {
    this.passwordTouched = true;

=======
  RegistrarUsuario(): void {
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
    if (!this.usuario.NombreCompleto || !this.usuario.Usuario || !this.usuario.Email || !this.usuario.Contrasena) {
      this.mostrarNotificacion('danger', 'Por favor completá todos los campos.');
      return;
    }

<<<<<<< HEAD
    if (!this.passwordValida) {
      this.mostrarNotificacion('danger', 'La contraseña no cumple con los requisitos.');
      return;
    }

    this.cargando = true;
    this.notificacion = null;
=======
    this.cargando = true;
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
    const payload = {
      Username: this.usuario.Usuario,
      Password: this.usuario.Contrasena,
      Email: this.usuario.Email,
      Fullname: this.usuario.NombreCompleto
    };
    this.service.RegistrarUsuario(payload).subscribe(
<<<<<<< HEAD
      (resultado: any) => {
        this.cargando = false;
        if (resultado.estado) {
          this.mostrarNotificacion('success', resultado.mensaje || 'Usuario registrado exitosamente. Revisá tu correo para confirmar la cuenta.');
          this.usuario = this.resetFormulario();
        } else {
          this.mostrarNotificacion('danger', resultado.mensaje || 'Error al registrar el usuario.');
        }
=======
      (_resultado: any) => {
        this.cargando = false;
        this.mostrarNotificacion('success', 'Usuario registrado exitosamente. Revisá tu correo para confirmar la cuenta.');
        this.usuario = this.resetFormulario();
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
      },
      (error: any) => {
        this.cargando = false;
        console.error('Error al registrar', error);
<<<<<<< HEAD
        this.mostrarNotificacion('danger', 'Error al conectar con el servidor.');
=======
        this.mostrarNotificacion('danger', 'Error al registrar el usuario.');
>>>>>>> 41617790ab247961548526b1a8b0eb3a6cdad318
      }
    );
  }

  irALogin(): void {
    this.router.navigate(['/login']);
  }
}
