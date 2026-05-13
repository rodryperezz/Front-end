import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './Components/usuarios/login/login';
import { Registro } from './Components/usuarios/registro/registro';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  




 }
