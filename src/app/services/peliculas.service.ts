import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private URL = 'https://api.themoviedb.org/3';
  private apiKey = '031e4d235f0ff6b16911ae1ef0934509';

  constructor(
    private http: HttpClient
  ) { }

  getPopulares() {

    console.log('populares');
    const getUrl = `${this.URL}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;

    return this.http.jsonp(getUrl, 'callback').pipe(
      map((res: any) => res['results'])
    );
  }


}
