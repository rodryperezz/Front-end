import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TicketService } from '../../../services-ticket/ticket-service';

interface Publicacion{
  Id:number,
  Titulo:string,
  Contenido:string,
  FechaPublicacion:string | Date,
  UsuarioId:number
}

@Component({
  selector: 'app-publicaciones',
  standalone: false,
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.css',
})
export class Publicaciones implements OnInit{

  publicaciones: Publicacion[] = [];
  publicacion: Publicacion = this.resetFormulario();
  isEditing: boolean = false;
  mostrarFormulario: boolean = false;

  constructor(private service: TicketService, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.GetPublicaciones();
  }

  resetFormulario(): Publicacion {
  this.isEditing = false;
  return {
    Id: 0,
    Titulo: '',
    Contenido: '',
    FechaPublicacion: new Date().toISOString().substring(0, 10),
    UsuarioId: 1
  };
}

  VisibleFormulario(): void {
  this.mostrarFormulario = !this.mostrarFormulario;
  this.cdr.detectChanges();
}

  GetPublicaciones(): void {
    this.service.GetPublicaciones().subscribe(
      (resultado: any) => {
        this.publicaciones = resultado;
        console.log('Publicaciones cargadas:', this.publicaciones);
      },
      (error: any) => {
        console.error('Error al cargar publicaciones', error);
        alert('Error al cargar las publicaciones.');
      }
    );
  }

  CreatePublicacion(): void {
    if (!this.publicacion.Titulo || !this.publicacion.Contenido) {
      alert('Por favor completá el título y el contenido.');
      return;
    }
    if (this.isEditing) {
      alert('Guardá la edición actual o cancelá.');
      return;
    }
    this.service.CreatePublicacion(this.publicacion).subscribe(
      (resultado: any) => {
        alert('Publicación creada exitosamente!');
        this.GetPublicaciones();
        this.publicacion = this.resetFormulario();
      },
      (error: any) => {
        console.error('Error al crear', error);
        alert('Error al crear la publicación.');
      }
    );
  }

  seleccionarPublicacion(pub: Publicacion): void {
    this.publicacion = { ...pub };
    this.isEditing = true;
    this.mostrarFormulario = true;
    this.cdr.detectChanges();
  }

  UpdatePublicacion(): void {
    if (!this.isEditing || this.publicacion.Id === 0) {
      alert('Seleccioná una publicación primero.');
      return;
    }
    this.service.UpdatePublicacion(this.publicacion.Id, this.publicacion).subscribe(
      (resultado: any) => {
        alert('Publicación actualizada exitosamente!');
        this.GetPublicaciones();
        this.publicacion = this.resetFormulario();
      },
      (error: any) => {
        console.error('Error al actualizar', error);
        alert('Error al actualizar.');
      }
    );
  }

  DeletePublicacion(id: number): void {
    if (!id || id === 0) {
      alert('Seleccioná una publicación válida para eliminar.');
      return;
    }
    if (confirm('¿Seguro que querés eliminar esta publicación?')) {
      this.service.DeletePublicacion(id).subscribe(
        (resultado: any) => {
          alert('Publicación eliminada exitosamente!');
          this.GetPublicaciones();
          this.publicacion = this.resetFormulario();
        },
        (error: any) => {
          console.error('Error al eliminar', error);
          alert('Error al eliminar.');
        }
      );
    }
  }

}
