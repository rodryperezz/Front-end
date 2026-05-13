import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './Components/usuarios/login/login';
import { Registro } from './Components/usuarios/registro/registro';
import { OlvideContrasenia } from './Components/usuarios/olvide-contrasenia/olvide-contrasenia';

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
