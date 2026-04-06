import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] = [];

  constructor() {

  }
}
