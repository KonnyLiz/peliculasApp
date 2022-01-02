import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasLista } from 'src/app/models/peliculas.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: PeliculasLista[] = [];

  constructor(
    private route: Router
  ) { }

  viewDetails(id: number) {
    console.log(id);
    this.route.navigate(['/detalle', id, '/buscar']);
  }

}
