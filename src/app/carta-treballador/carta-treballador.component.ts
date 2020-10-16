import { Component, OnInit } from '@angular/core';
import { GrupTreballador } from '../models/treballador.model';

@Component({
  selector: 'app-carta-treballador',
  templateUrl: './carta-treballador.component.html',
  styleUrls: ['./carta-treballador.component.css']
})
export class CartaTreballadorComponent implements OnInit {

  treballadors: GrupTreballador[] = [];
  treballadorActual: GrupTreballador = null;

  constructor() { }

  ngOnInit(): void {
    this.treballadors.push(new GrupTreballador('Pedro', 'https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
    this.treballadors.push(new GrupTreballador('Juan',  'https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
    this.treballadors.push(new GrupTreballador('Jorge', 'https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
    this.treballadors.push(new GrupTreballador('Borja', 'https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
    this.treballadors.push(new GrupTreballador('Victor','https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
    this.treballadors.push(new GrupTreballador('Quim',  'https://picsum.photos/150/150', 'hola, aqui va una pequeña presentacion del trabajador :)'));
  }

}
