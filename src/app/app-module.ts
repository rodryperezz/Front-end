import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Publicaciones } from './Components/publicaciones/publicaciones/publicaciones';
import { Comentarios } from './Components/comentarios/comentarios/comentarios';
import { Login } from './Components/usuarios/login/login';
import { Registro } from './Components/usuarios/registro/registro';

@NgModule({
  declarations: [
    App,
    Publicaciones,
    Comentarios,
    Login,
    Registro
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [App]
})
export class AppModule { }