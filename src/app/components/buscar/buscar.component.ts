import { Component, OnInit } from '@angular/core';
import { PeliculasLista } from 'src/app/models/peliculas.interface';
import { Resultados } from 'src/app/models/resultados.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  lista: PeliculasLista[] = [];

  constructor(
    private _ps: PeliculasService
  ) {
    _ps.getBuscar('evan').subscribe((res) => {
      this.lista = res.results;
      console.log(res.results);
    });
  }

  ngOnInit(): void {
  }

}
