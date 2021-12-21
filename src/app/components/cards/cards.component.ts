import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasLista } from 'src/app/models/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  lista: PeliculasLista[] = [];
  constructor(
    private _ps: PeliculasService,
    private route: Router
  ) {
    _ps.getPopulares().subscribe(res => {
      console.log(res);
      this.lista = res;
    });
  }

  ngOnInit(): void {
  }

  viewDetails(id: number){
    console.log(id);
    this.route.navigate(['/detalle', id]);
  }

}
