import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Login } from './paginas/login/login';
import { Nosotros } from './paginas/nosotros/nosotros';
import { Registro } from './paginas/registro/registro';
import { RegistroComponente } from './paginas/registro-componente/registro-componente';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'login', component: Login },
  { path: 'nosotros', component: Nosotros },
  { path: 'registro', component: Registro },
  { path: 'registro-componente', component: RegistroComponente },
  { 
    path: 'clientes', 
    loadChildren: () => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTES) 
  },
];
