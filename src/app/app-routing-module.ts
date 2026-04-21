import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Login } from './paginas/login/login';
import { Nosotros } from './paginas/nosotros/nosotros';
import { Registro } from './paginas/registro/registro';

const routes: Routes = [
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: Inicio},
  {path: 'login', component: Login},
  {path: 'nosotros', component: Nosotros},
  {path: 'registro', component: Registro}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
