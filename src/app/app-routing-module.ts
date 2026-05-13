import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './components-ticket/usuarios/login/login';
import { Registro } from './components-ticket/usuarios/registro/registro';
import { OlvideContrasenia } from './components-ticket/usuarios/olvide-contrasenia/olvide-contrasenia';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'olvide-contrasenia', component: OlvideContrasenia },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  




 }
