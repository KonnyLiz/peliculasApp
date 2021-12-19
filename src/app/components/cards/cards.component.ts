import { Component, OnInit } from '@angular/core';
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
    private _ps: PeliculasService
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
  }

}
