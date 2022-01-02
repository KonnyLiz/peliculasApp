import { Pipe, PipeTransform } from '@angular/core';
import { PeliculasLista } from '../models/peliculas.interface';

@Pipe({
  name: 'noImageGrid'
})
export class NoImageGridPipe implements PipeTransform {
  // pipe to extract backdrop path, or poster path, or no image.

  transform(value: PeliculasLista): string {
    let url = 'https://image.tmdb.org/t/p/w400';

    if(value.backdrop_path){
      return url + value.backdrop_path;
    } else {
      if(value.poster_path){
        return url + value.poster_path;
      } else{
        return 'assets/img/noImagePortrait.jpg';
      }
    }
  }

}
