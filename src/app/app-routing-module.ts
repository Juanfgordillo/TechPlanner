import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'clientes'},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes-routing-module').then(m => m.ClientesRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
