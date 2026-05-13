import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../Services/blog-service';

interface Usuario {
  Id: number;
  Usuario: string;
  NombreCompleto: string;
  Email: string;
  Contrasena: string;
  Rol: string;
}

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
  private timeoutId: any = null;

  constructor(private service: BlogService, private router: Router) {}

  private mostrarNotificacion(tipo: string, mensaje: string): void {
    this.notificacion = { tipo, mensaje };
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.notificacion = null, 5000);
  }

  resetFormulario(): Usuario {
    return {
      Id: 0,
      Usuario: '',
      NombreCompleto: '',
      Email: '',
      Contrasena: '',
      Rol: 'user'
    };
  }

  RegistrarUsuario(): void {
    if (!this.usuario.NombreCompleto || !this.usuario.Usuario || !this.usuario.Email || !this.usuario.Contrasena) {
      this.mostrarNotificacion('danger', 'Por favor completá todos los campos.');
      return;
    }

    this.cargando = true;
    this.service.RegsitrarUsuario(this.usuario).subscribe(
      (_resultado: any) => {
        this.cargando = false;
        this.mostrarNotificacion('success', 'Usuario registrado exitosamente.');
        this.usuario = this.resetFormulario();
      },
      (error: any) => {
        this.cargando = false;
        console.error('Error al registrar', error);
        this.mostrarNotificacion('danger', 'Error al registrar el usuario.');
      }
    );
  }

  irALogin(): void {
    this.router.navigate(['/login']);
  }
}
