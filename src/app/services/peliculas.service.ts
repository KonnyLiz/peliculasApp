import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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


}
