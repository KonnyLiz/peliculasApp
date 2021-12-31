import { Component, OnInit } from '@angular/core';
import { PeliculasLista } from 'src/app/models/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista: PeliculasLista[] = [];

  constructor(
    private _ps: PeliculasService
  ) {
    _ps.getPopulares().subscribe(res => {
      this.lista = res;
    });

    _ps.getCatelera();
  }

  ngOnInit(): void {
  }

}
