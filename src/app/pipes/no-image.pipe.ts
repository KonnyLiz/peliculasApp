import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string | undefined, position: string): string {
    if (value != null || value != undefined) {
      return 'https://image.tmdb.org/t/p/w400' + value;
    } else {
      if (position === 'lanscape') {
        return 'assets/img/noImageLanscape.jpg';
      } else {
        return 'assets/img/noImagePortrait.jpg';
      }
    }
  }

}
