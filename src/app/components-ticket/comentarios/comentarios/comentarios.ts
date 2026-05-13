import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TicketService } from '../../../services-ticket/ticket-service';

interface Comentario {
  Id: number;
  Contenido: string;
  FechaComentario: string | Date;
  PublicacionId: number;
  UsuarioId: number;
}

@Component({
  selector: 'app-comentarios',
  standalone: false,
  templateUrl: './comentarios.html',
  styleUrl: './comentarios.css',
})
export class Comentarios implements OnInit {

  comentarios: Comentario[] = [];
  contenido: string = '';
  publiIdBuscar: number = 0;
  usuarioIdLogueado: number = 1;
  mostrarFormulario: boolean = false;

  constructor(private service: TicketService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  VisibleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.cdr.detectChanges();
  }

  limpiarContenido(): void {
  this.contenido = '';
  this.cdr.detectChanges();
}

  GetComentariosByPubli(): void {
    if (!this.publiIdBuscar || this.publiIdBuscar === 0) {
      alert('Ingresá el ID de la publicación.');
      return;
    }
    this.service.GetComentariosByPubli(this.publiIdBuscar).subscribe(
      (resultado: any) => {
        this.comentarios = resultado;
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error('Error al cargar comentarios', error);
        alert('Error al cargar los comentarios.');
      }
    );
  }

  CreateComentario(): void {
    if (!this.contenido) {
      alert('Ingresá el contenido del comentario.');
      return;
    }
    this.service.CreateComentario(this.publiIdBuscar, this.usuarioIdLogueado, this.contenido).subscribe(
      (resultado: any) => {
        alert('Comentario creado exitosamente!');
        this.GetComentariosByPubli();
        this.contenido = '';
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error('Error al crear comentario', error);
        alert('Error al crear el comentario.');
      }
    );
  }
}