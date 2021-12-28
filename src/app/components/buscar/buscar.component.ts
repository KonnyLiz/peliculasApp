import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  cargando: boolean;

  constructor(
    private _ps: PeliculasService,
    private actRoute: ActivatedRoute
  ) {
    this.cargando = true;
    actRoute.params.subscribe(txt => {
      this.buscar(txt['txt']);
      this.cargando = false;
    });
  }

  ngOnInit(): void {
  }

  buscar(txt: string){
    this.cargando = true;
    this._ps.getBuscar(txt).subscribe((res) => {
      this.lista = res.results;
      this.cargando = false;
    });
  }

}
