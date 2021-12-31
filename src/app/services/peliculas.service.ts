import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { PeliculaDetalle } from '../models/pelicula-detalle.interface';
import { Resultados } from '../models/resultados.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private URL = 'https://api.themoviedb.org/3';
  private apiKey = '031e4d235f0ff6b16911ae1ef0934509';
  imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private http: HttpClient
  ) { }

  getPopulares() {
    // le agregamos callback=test para decirle a tmdb que queremos usar jsonp para las petivions
    // solamente devuelve respuesta al usar jsonp
    const getUrl = `${this.URL}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&callback=test`;

    return this.http.jsonp(getUrl, 'callback').pipe(
      map((res: any) => res['results'])
    );
  }

  getCatelera() {
    // /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
    let desde = new Date();
    let hasta = new Date();

    // le sumamos 7 dias a la fecha de finalizacion
    hasta.setDate(hasta.getDate() + 7);

    // lo pasamos al formato 2021-12-30
    let desdeStr = moment(desde).format('YYYY-MM-DD');
    let hastaStr = moment(hasta).format('YYYY-MM-DD');
    
    const getUrl = `${this.URL}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}`;

    return this.http.get(getUrl).subscribe(res => console.log(res));
  }

  getDetallePelicula(id: number) {
    const getUrl = `${this.URL}/movie/${id}?api_key=${this.apiKey}`;

    return this.http.get(getUrl).pipe(
      map((res: any) => res)
    );
  }

  getBuscar(txt: string) {
    // https://api.themoviedb.org/3/search/movie?api_key=031e4d235f0ff6b16911ae1ef0934509&language=en-US&query=eva&page=1&include_adult=false
    const query = `${this.URL}/search/movie?query=${txt}&api_key=${this.apiKey}&language=en-US&page=1&include_adult=false`;
    return this.http.get<Resultados>(query);
  }


}
