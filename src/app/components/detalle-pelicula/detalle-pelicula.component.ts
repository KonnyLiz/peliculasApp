import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDetalle } from 'src/app/models/pelicula-detalle.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  detalle?: PeliculaDetalle;

  constructor(
    private _ps: PeliculasService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(id => {
      _ps.getDetallePelicula(id['id']).subscribe(res => {

        this.detalle = res;
        console.log(this.detalle);
      })
    });
  }

  ngOnInit(): void {
  }

  verGenero(id: number) {
    console.log(id);
  }

}
