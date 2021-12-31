import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasLista } from 'src/app/models/peliculas.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() items: PeliculasLista[] = [];

  constructor(
    private route: Router
  ) { }

  viewDetails(id: number) {
    this.route.navigate(['/detalle', id]);
  }

}
