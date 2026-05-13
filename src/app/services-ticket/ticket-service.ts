import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  constructor(private http:HttpClient){}

  url = "https://localhost:7150/api/blogs/" //TODO ESTO CAMBIAR MANIANA

  GetPublicaciones(){
    return this.http.get(this.url + "GetPublicaciones")
  }

  GetPublicacionById(id:any){
    return this.http.get(this.url + "GetPublicacionById/" + id)
  }

  GetComentariosByPubli(id:any){
    return this.http.get(this.url + "GetComentariosByPubli/" + id)
  }

  CreatePublicacion(obj:any){
    return this.http.post(this.url + "CreatePublicacion", obj)
  }

  RegsitrarUsuario(obj:any){
    return this.http.post(this.url + "RegistrarUsuario", obj)
  }

  Login(obj:any){
    return this.http.post(this.url + "Login", obj)
  }

  CreateComentario(publiId:any, usuarioId:any, contenido:any){
    return this.http.post(
      this.url + "CreateComentario/" + publiId + "/" + usuarioId,
      JSON.stringify(contenido),
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  UpdatePublicacion(id:any, obj:any){
    return this.http.put(this.url + "UpdatePublicacion/" + id, obj)
  }

  DeletePublicacion(id:any){
    return this.http.delete(this.url + "DeletePublicacion/" + id)
  }
}
