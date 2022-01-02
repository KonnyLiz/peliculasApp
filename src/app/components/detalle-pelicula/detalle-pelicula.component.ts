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
  after: string = '';
  constructor(
    private _ps: PeliculasService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(params => {
      this.after = params['page'];

      _ps.getDetallePelicula(params['id']).subscribe(res => {
        this.detalle = res;
      });
    });
  }

  ngOnInit(): void {
  }

  verGenero(id: number) {
    console.log(id);
  }

}
